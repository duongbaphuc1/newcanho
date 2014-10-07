<?php 
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Realestate_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

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
    
    function getLimitByOrder() {
        $this->db->order_by("created_date", "desc");
        $this->db->limit(10);
        $query = $this->db->get($this->_table);
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

    function getById($id) {
        $this->db->where('id', $id);
        $query = $this->db->get($this->_table, 1);
        return $query->row_array();
    }

    //for paging
    function getAll($offset = null, $limit = null, $sort = null) {
        if (!empty($offset) && !empty($limit)) {
            $result = $this->fetchAll($this->_table, $offset, $limit, $sort);
        } else {
            $result = $this->fetchAll($this->_table, $offset, $limit, $sort);
        }
        if ($result) {
            return $result;
        }
        return NULL;
    }

    function getAllById($tbl, $col, $id) {
        $this->db->where($col, $id);
        $query = $this->db->get($tbl);
        return $query->result_array();
    }

    function getAllByLike($tbl, $col, $term) {
        $this->db->like($col, $term);
        $query = $this->db->get($tbl);
        return $query->result_array();
    }    
    
    //autocomplete for Project
    function getAllForJson($term) {
        $record = array();
        $return_arr = array();

        $results = $this->getAllByLike('project', 'project_name', $term);
        foreach ($results as $result) {
            $record['id'] = $result['id'];
            $record['value'] = $result['project_name'];
            array_push($return_arr, $record);
        }
        return $return_arr ;
    }

//end autocomplete for Project

    function edit($data, $id) {       
        unset($data['tags']);
        unset($data['old_image']);
        
        return $this->db->update($this->_table, $data, array('id' => $id));
    }

    function delete($id) {
        $realestate = $this->getById($id);
        if (!empty($realestate)) {
            if($realestate['image']!=""){
                $images = explode("&fieldbreak;", $realestate['image']);
                foreach($images as $img){
                    removeFile(BASEPATH . "../public/images/upload/" . $img);
                }
            }
            $this->db->delete('tags_estate', array('real_id' => $id));
            return $this->db->delete($this->_table, array('id' => $id));
        }
        return FALSE;
    }

    function add($data) {       
        unset($data['tags']);
        $img = "";

        $data['is_active'] = 1;
        $data['user_id'] = USER_ID;
        // upload image logo
        for ($i = 0; $i < 10; $i++) {
            $name = md5(date('d/m/Y H:i:s'));
            $image = uploadFile("image" . $i, BASEPATH . "../public/images/upload/", $name . "_" . $i);
            if (!empty($image['file_name'])) {
                $img.=$image['file_name']."&fieldbreak;";
            }
        }
        $data['image'] = $img;
        $add_real = $this->db->insert($this->_table, $data);
        if ($add_real) {
            $real_id = $this->db->insert_id();
            $tags = $_POST['tags'];
            foreach ($tags as $tag) {
                $record['tag_id'] = $tag;
                $record['real_id'] = $real_id;
                $this->db->insert('tags_estate', $record);
            }
        }
        return $add_real;
    }

}
?>