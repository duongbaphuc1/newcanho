<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Configs_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "configs";
        $this->_primary_key = "id";
    }

    /**
     * @author Phuc Duong
     * @return array
     **/
    function getAll(){
        $query = $this->db->get($this->_table);
        $results = $query->result_array();
        $configs = array();
        foreach($results as $item){
            $configs[$item['code']] = array("value" => $item['value'], 'label' => $item['label']);
        }
        return $configs;
    }
}

?>