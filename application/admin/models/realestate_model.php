<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Realestate_model extends Abstract_model {

    protected $_table;
    protected $_primary_key ;
            function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "real_estate";
        $this->_primary_key = "id";
        $this->load->helper("upload_helper");
    }
    
    function getData($tbl) {
        $query = $this->db->get($tbl);
        return $query->result_array();
    }
    
    function getCatForSelectBox($tbl,$col){
        $lists = array(""=>"--Select--");
        $list = $this->getData($tbl);
        foreach ($list as $ls){
            $lists[$ls['id']] = $ls[$col];
        }
        return $lists;
    }

    //for paging
    function getAll($offset = null, $limit = null, $sort = null){
        if( !empty($offset) && !empty($limit) ){
            $result = $this->fetchAll($this->_table, $offset, $limit, $sort);
        }else{
            $result = $this->fetchAll($this->_table, $offset, $limit, $sort);
        }
        if($result){
            return $result;
        }
        return NULL;
    }

    function getAllById($tbl,$col,$id) {
        $this->db->where($col, $id);
        $query = $this->db->get($tbl);
        return $query->result_array();
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

    function add($data){
        unset($data['section']);
        unset($data['tags']);
        $tag_id="";
        $img="";
        $tags=$_POST['tags'];
        foreach ($tags as $tag){
            $tag_id.=$tag."&";
        }
        $data['tags']=$tag_id;
        $data['is_active']=1;
        $data['user_id'] = USER_ID;
        // upload image logo
        for($i=0;$i<10;$i++){            
            $name = md5(date('d/m/Y H:i:s'));
            $image = uploadFile("image".$i, BASEPATH."../public/images/upload/",$name."_".$i);
            if(!empty($image['file_name'])){                
                $img.=$image['file_name']."_".$i."&fieldbreak;";
            }  
        }
        $data['image'] = $img;
        return $this->db->insert($this->_table, $data);
    }
}

?>)