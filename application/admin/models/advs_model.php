<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Advs_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->helper("upload_helper");
    }

    function getAll() {
        $query = $this->db->get('advertising');
        return $query->result();
    }  
            
    function getById($id) {
        $this->db->where('id', $id);
        $query = $this->db->get("advertising", 1);
        return $query->row_array();
    }

    function edit($data, $id) {
        unset($data['section']);
        unset($data['old_image']);
        // upload image logo
        $image = uploadFile("image", BASEPATH."../public/images/upload/"); 
        if(!empty($image['file_name'])){
            $data['image'] = $image['file_name'];
            removeFile(BASEPATH . "../public/images/upload/" . $_POST['old_image']);            
        }
        return $this->db->update('advertising', $data, array('id' => $id));
    }

    function delete($id) {
        $cat = $this->getById($id);
        if (!empty($cat)) {            
            removeFile(BASEPATH . "../public/images/upload/" . $cat['image']);
            return $this->db->delete("advertising", array('id' => $id));
        }
        return FALSE;
    }

    function add($data){      
        unset($data['section']);

        $data['createdby'] = USER_ID;
        // upload image logo
        $image = uploadFile("image", BASEPATH."../public/images/upload/");
        if(!empty($image['file_name'])){
            $data['image'] = $image['file_name'];
        }
        return $this->db->insert("advertising", $data);
    }
}

?>