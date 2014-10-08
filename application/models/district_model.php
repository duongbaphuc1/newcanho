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
            
    function getAll($type = null, $offset = null, $limit = null){
        if(!empty($limit) && !empty($offset)){
            $this->db->limit($limit, $offset);
        }
        if(!is_null($type)){
            $this->db->where("type", $type);
        }
        $result = $this->fetchAll($this->_table);
        if($result){
            return $result;
        }
        return NULL;
    } 
    
    function getDistrict(){
        $districts = array(0=>'Chọn quận/ huyện');     
        $this->db->order_by("name", "asc");
        $query = $this->db->get($this->_table);
        $results = $query->result_array();
        foreach ($results as $item){
            $districts[$item['id']] = $item['name'];
        }
        
        return $districts;
    }
}

?>