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

    function getAll($offset = null, $limit = null) {
        $this->db->select('real_estate.*, district.district_name as district_name');
        $this->db->join('district', 'district.id = real_estate.district_id');

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

    function getOtherReals($id) {
        return $this->getOtherRow($id, $this->_table);
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