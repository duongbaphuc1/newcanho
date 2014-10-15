<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Quans_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "district";
        $this->_primary_key = "id";
    }

    function add($data) {
        $quans = $_POST['district_name'];        
        $data['slug'] = str_replace (' ','-',strtolower($this->vn_str_filter($quans)));
        return $this->db->insert($this->_table, $data);
    }

    function edit($data, $id) {
        $quans = $_POST['district_name'];        
        $data['slug'] = str_replace (' ','-',strtolower($this->vn_str_filter($quans)));
        return $this->db->update($this->_table, $data, array('id' => $id));
    }

    function saveSort($data){        
        foreach ($data['sort'] as $key=>$val){
            $dataSort['sort'] = $val[0];
            $this->db->update($this->_table, $dataSort, array('id' => $key));
        }
    }
    
    function getById($id) {
        $this->db->where('id', $id);
        $query = $this->db->get($this->_table, 1);
        return $query->row_array();
    }

    function delete($id) {
        return $this->db->delete($this->_table, array('id' => $id));
    }

    function getAll() {
        $this->db->where("province_id", 1);
        $query = $this->db->get($this->_table);
        return $query->result();
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
    
    function vn_str_filter ($str){
        $unicode = array(
            'a'=>'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ',
            'd'=>'đ',
            'e'=>'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ',
            'i'=>'í|ì|ỉ|ĩ|ị',
            'o'=>'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ',
            'u'=>'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự',
            'y'=>'ý|ỳ|ỷ|ỹ|ỵ',
			'A'=>'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
            'D'=>'Đ',
            'E'=>'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
            'I'=>'Í|Ì|Ỉ|Ĩ|Ị',
            'O'=>'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
            'U'=>'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
            'Y'=>'Ý|Ỳ|Ỷ|Ỹ|Ỵ',
        );
        
       foreach($unicode as $nonUnicode=>$uni){
            $str = preg_replace("/($uni)/i", $nonUnicode, $str);
       }
		return $str;
    }

}

?>