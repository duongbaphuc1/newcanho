<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class ProjectReals_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "project_reals";
        $this->_primary_key = "id";
    }

    function getAll($offset = null, $limit = null, $sort = null) {
        $result = $this->fetchAll($this->_table, $offset, $limit, $sort);       
        if ($result) {
            return $result;
        }
        return NULL;
    }

    function getAllByType($type, $offset = 0, $limit = 0) {
        $this->db->select('project_reals.*, district.name as district_name');
        $this->db->join('district', 'district.id = project_reals.district_id');
        $this->db->where("type", $type);

//        if (!empty($district_id)) {
//            $this->db->where('district_id', $district_id);
//        }

        if (!empty($limit)) {
            $this->db->limit($limit, $offset);
        }
        $result = $this->db->get($this->_table);

        if ($result) {
            return $result->result_array();
        }
        return NULL;
    }

    function getRealById($id) {
        if (empty($id)) {
            return null;
        }
        $result = $this->fetchOneRow($this->_table, array('id' => $id));
        return $result;
    }

    function getAllByTag($tagId, $offset = 0, $limit = 0) {
        $this->db->select('project_reals.*, district.name as district_name');
        $this->db->join('district', 'district.id = project_reals.district_id');

        $this->db->where('tag_id', $tagId);

        if (!empty($limit)) {
            $this->db->limit($limit, $offset);
        }
        $result = $this->db->get($this->_table);

        if ($result) {
            return $result->result_array();
        }
        return NULL;
    }

    function getOtherReals($id) {
        return $this->getOtherRow($id, $this->_table);
    }

    function timKiem($keyword) {
        $this->db->like('name', $keyword);
        $result = $this->db->get($this->_table);

        if ($result) {
            return $result->result_array();
        }
        return NULL;
    }

}

?>