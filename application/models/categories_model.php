<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Categories_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "categories";
        $this->_primary_key = "id";
    }
    
    function getAll($type){

        $this->db->where('type', $type);
        $this->db->order_by('sort');
        $result = $this->db->get($this->_table);

        return $result->result_array();
    }

    /**
     * @author Phuc Duong
     * @return array
     **/
    function getCatSearch($type = null){

        $cats = array(0=>'- Chọn loại bất động sản -');

        if(!is_null($type)){
            $this->db->where('type', $type);
        }

        $this->db->order_by("sort", "asc");
        $query = $this->db->get($this->_table);
        $results = $query->result_array();
        foreach ($results as $item){
            $cats[$item['id']] = $item['category_name'];
        }

        return $cats;
    }

    function getCatById($id){
        if(empty($id)){
            return null;
        }
        $result = $this->fetchOneRow($this->_table, array('id'=>$id));
        return $result;
    }
}

?>