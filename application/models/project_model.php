<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Project_model extends Abstract_model
{

    protected $_table;
    protected $_primary_key;

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "project";
        $this->_primary_key = "id";
    }

    function getAll($offset = null, $limit = null, $sort = null)
    {
        $result = $this->fetchAll($this->_table, $offset, $limit, $sort);
        if ($result) {
            return $result;
        }
        return NULL;
    }

    function _genequeryPro($type, $offset = 0, $limit = 0){
        $strFields = 'real_estate.*, district.district_name as district_name, district.slug as dis_slug,';
        $strFields .= 'project.project_name as pro_name, categories.slug as cat_slug, categories.category_name,';
        $strFields .= 'project.project_title as pro_seo_title, project.project_desc as pro_seo_desc, project.project_keyword as pro_seo_keyword';
        $this->db->select($strFields);
        $this->db->join('project', 'project.id = real_estate.project_id');
        $this->db->join('district', 'district.id = real_estate.district_id');
        $this->db->join('categories', 'categories.id = real_estate.category_id');
        $this->db->where("project.slug", $type);

        if (!empty($limit)) {
            $this->db->limit($limit, $offset);
        }
        return $this->db->get('real_estate');
    }

    function getAllProByType($type, $offset = 0, $limit = 0)
    {

        $result = $this->_genequeryPro($type, $offset, $limit);

        if ($result) {
            return $result->result_array();
        }
        return NULL;
    }

    function getTotalProByType($type){

        $result = $this->_genequeryPro($type);

        if ($result) {
            return $result->num_rows();
        }
        return 0;
    }

    function getProjectByCat($catSlug, $districtSlug = null)
    {
        $this->db->select('project.*');
        $this->db->join('cat_project', 'cat_project.id = project.catproject_id');
        $this->db->join('real_estate', 'real_estate.project_id = project.id');

        if(!empty($districtSlug)){
            $this->db->join('district', 'district.id = project.district_id');
            $this->db->where('district.slug', $districtSlug);
        }

        $this->db->where('cat_project.slug', $catSlug);
        $this->db->where('project.is_active', 1);
        $this->db->where('real_estate.is_active', 1);
        $this->db->group_by('project.id');
        $this->db->limit(LIMIT_LOAD_PROJECT_RIGHT, 0);
        $result = $this->db->get($this->_table);

        if ($result) {
            return $result->result_array();
        }
        return NULL;
    }

}

?>