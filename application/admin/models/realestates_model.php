<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Realestates_model extends CI_Model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        parent::__construct();
        $this->_table = "real_estates";
        $this->_primary_key = "id";
        $this->load->helper("upload_helper");
    }

    function getAll() {
        $this->db->order_by("id", "DESC");
        $query = $this->db->get($this->_table);
        return $query->result();
    }

    function getById($id) {
        $this->db->where('id', $id);
        $query = $this->db->get($this->_table, 1);
        return $query->row_array();
    }

    function edit($data, $id) {
        unset($data['section']);
        unset($data['old_image']);

        // upload image logo
        $image = uploadFile("image", BASEPATH . "../public/images/upload/");
        if (!empty($image['file_name'])) {
            $data['image'] = $image['file_name'];
            removeFile(BASEPATH . "../public/images/upload/" . $_POST['old_image']);
        }
        return $this->db->update($this->_table, $data, array('id' => $id));
    }

    function delete($id) {
        $customer = $this->getById($id);
        if (!empty($customer)) {
            removeFile(BASEPATH . "../public/images/upload/" . $customer['image']);
            return $this->db->delete($this->_table, array('id' => $id));
        }
        return FALSE;
    }

    function add($data) {
        unset($data['section']);

        $data['createdby'] = USER_ID;
        // upload image logo
        $image = uploadFile("image", BASEPATH . "../public/images/upload/");
        if (!empty($image['file_name'])) {
            $data['image'] = $image['file_name'];
        }
        return $this->db->insert($this->_table, $data);
    }

}

?>