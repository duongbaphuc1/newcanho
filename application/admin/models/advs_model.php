<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Advs_model extends CI_Model {

    protected $_table;
    protected $_primary_key ;
    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "advs";
        $this->_primary_key = "id";
        $this->load->helper("upload_helper");
    }
    
    function getData($tbl) {
        $query = $this->db->get($tbl);
        return $query->result_array();
    }
    
    function getCatForSelectBox($tbl, $col) {
        $lists = array("" => "--Select--");
        $list = $this->getData($tbl);
        foreach ($list as $ls) {
            $lists[$ls['id']] = $ls[$col];
        }
        return $lists;
    }

    function getAll() {
        $query = $this->db->get($this->_table);
        return $query->result();
    }  
            
    function getById($id) {
        $this->db->where('id', $id);
        $query = $this->db->get($this->_table, 1);
        return $query->row_array();
    }

    function edit($data, $id) { 
        if(isset($_POST['is_active'])){
            $data['is_active'] = 1;         
        }
        else{
            $data['is_active'] = 0;
        }
        unset($data['old_image']);
        // upload image logo
        $name = md5(date('d/m/Y H:i:s'));
        $image = uploadFile("image", BASEPATH."../public/images/upload/",$name); 
        if(!empty($image['file_name'])){
            $data['image'] = $image['file_name'];
            removeFile(BASEPATH . "../public/images/upload/" . $_POST['old_image']);            
        }
        return $this->db->update($this->_table, $data, array('id' => $id));
    }

    function delete($id) {
        $cat = $this->getById($id);
        if (!empty($cat)) {            
            removeFile(BASEPATH . "../public/images/upload/" . $cat['image']);
            return $this->db->delete($this->_table, array('id' => $id));
        }
        return FALSE;
    }
    
    function saveSort($data){        
        foreach ($data['sort'] as $key=>$val){
            $dataSort['sort'] = $val[0];
            $this->db->update($this->_table, $dataSort, array('id' => $key));
        }
    }

    function add($data){
        if(isset($_POST['is_active'])){
            $data['is_active'] = 1;         
        }
        else{
            $data['is_active'] = 0;
        }
        // upload image logo
        $name = md5(date('d/m/Y H:i:s'));
        $image = uploadFile("image", BASEPATH."../public/images/upload/",$name);
        if(!empty($image['file_name'])){
            $data['image'] = $image['file_name'];
        }
        return $this->db->insert($this->_table, $data);
    }
    
    function active($id){
        $data['is_active'] = 1;
        return $this->db->update($this->_table, $data, array('id' => $id));
    }
    
    function unactive($id){
        $data['is_active'] = 0;
        return $this->db->update($this->_table, $data, array('id' => $id));
    }
}

?>