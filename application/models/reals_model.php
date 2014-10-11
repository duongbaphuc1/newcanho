<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Reals_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "real_estate";
        $this->_primary_key = "id";
    }

    function getAll($offset = null, $limit = null, $sort = null) {
        $this->db->select('real_estate.*, district.district_name as district_name');
        $this->db->join('district', 'district.id = real_estate.district_id');

        if (!empty($limit)) {
            $this->db->limit($limit, $offset);
        }

        if(!empty($sort)){
            $this->db->order_by($sort, "DESC");
        }

        $result = $this->db->get($this->_table);

        if ($result) {
            return $result->result_array();
        }
        return NULL;
    }

    function getFilter($cat_slug, $district = null, $offset = null, $limit = null, $sort = null){
        $select = 'real_estate.*, district.district_name as district_name, district.slug as dis_slug, categories.slug as pro_slug,';
        $select .= "categories.category_name";
        $this->db->select($select);
        $this->db->join('district', 'district.id = real_estate.district_id');
        $this->db->join('categories', 'categories.id = real_estate.category_id');

        if (!empty($limit)) {
            $this->db->limit($limit, $offset);
        }

        if (!empty($district)) {
            $this->db->where("district.slug", $district);
        }

        if(!empty($sort)){
            $this->db->order_by($sort, "DESC");
        }

        $this->db->where('categories.slug', $cat_slug);

        $result = $this->db->get($this->_table);

        if ($result) {
            return $result->result_array();
        }
        return null;
    }

    /**
     * @author Phuc Duong
     * @desc get real detail
     * @param int $id
     * @return array
    */
    function getRealById($id) {

        if (empty($id)) {
            return null;
        }
        $this->db->select('real_estate.*, district.district_name, district.slug as slug_dis, project.slug as slug_pro, project.project_name');
        $this->db->join('district', 'district.id = real_estate.district_id');
        $this->db->join('project', 'project.id = real_estate.project_id');
        $this->db->where('real_estate.id', $id);
        $result = $this->db->get($this->_table);

        return $result->row_array();
    }

    // get other real estate
    // @author Phuc Duong
    function getOtherReals($id, $projectID) {

        $this->db->where('id !='. $id);
        $this->db->where('project_id', $projectID);
        $this->db->limit(ITEM_MAX_VIEW_DETAIL);
        $this->db->order_by('id', 'DESC');
        $result = $this->db->get($this->_table);

        return $result->result_array();
    }

    function getMaxReal(){

        $this->db->order_by('view_count', 'DESC');
        $this->db->limit(ITEM_MAX_VIEW_DETAIL);
        $result = $this->db->get($this->_table);

        return $result->result_array();

    }

    function addReals($data) {        
        // upload image logo
        $image = uploadFile("image", BASEPATH . "../public/images/upload/");
        if (!empty($image['file_name'])) {
            $data['image'] = $image['file_name'];
        }
        return $this->db->insert($this->_table, $data);
    }
    
    function timKiem($keyword) {
        $this->db->like('title', $keyword);
        $result = $this->db->get($this->_table);
        
        if ($result) {
            return $result->result_array();
        }
        return NULL;
    }

}

?>