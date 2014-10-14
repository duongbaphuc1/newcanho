<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class District_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "district";
        $this->_primary_key = "id";
    }
    
    function countProject(){
        $this->db->select("district.*, count(project_reals.id) as totalPorject");
        $this->db->join('project_reals', 'project_reals.district_id=district.id');
        $this->db->group_by('project_reals.district_id');
        $query = $this->db->get($this->_table);
        return $query->result_array();
    }
            
    function getAll($province = null, $type = null, $offset = null, $limit = null){

        if(!empty($limit) && !empty($offset)){
            $this->db->limit($limit, $offset);
        }

        if(!is_null($province)){
            $this->db->where("province_id", $province);
        }

        $this->db->where('is_active', 1);

        $query = $this->db->get($this->_table);

        return $query->result_array();

    }

    /**
     * @author Phuc Duong
     * @return array
    **/
    function getAllWithCat($province = null, $catSlug = null){

        $this->db->select("district.*, real_estate.id as real_id, categories.id as cat_id");
        $this->db->join('real_estate', 'district.id = real_estate.district_id', 'right');
        $this->db->join('categories', 'categories.id = real_estate.category_id', 'right');

        if(!is_null($province)){
            $this->db->where("province_id", $province);
        }

        if(!is_null($catSlug)){
            $this->db->where("categories.slug", $catSlug);
        }

        $this->db->where('district.is_active', 1);
        $this->db->where('real_estate.is_active', 1);
        $this->db->order_by('sort');
        $this->db->group_by('district.id');

        $query = $this->db->get($this->_table);

        return $query->result_array();
    }

    /**
     * @author Phuc Duong
     * @return array
     **/
    function getDistrict($province = null){

        $districts = array(0=>'Chọn quận/ huyện');

        if(!is_null($province)){
            $this->db->where("province_id", $province);
        }

        $this->db->order_by("sort", "asc");
        $query = $this->db->get($this->_table);
        $results = $query->result_array();
        foreach ($results as $item){
            $districts[$item['id']] = $item['district_name'];
        }
        
        return $districts;
    }
}

?>