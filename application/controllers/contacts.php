<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Contacts extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model("Contact_model");
        $this->load->model("Common_model");
        $this->load->model('Captcha_model');
    }

    public function index() {

        $data = $this->Common_model->getDefault();

        $data['bodycontent'] = "contacts/index";
        if (ispost()) {
             $captchaWord = $this->session->userdata('capcha');
	    if( strcasecmp(strtoupper($captchaWord[0]), strtoupper($_POST['confirmCaptcha']) ) == 0){
             if($this->Contact_model->sendEmail()){
                 $data['msg'] = "Cám ơn bạn đã gửi liên hệ";
             }else{
                $data['msg'] = "Vui lòng gửi lại";
             }
            }else{ $data['msg'] = "Vui lòng nhập đúng Captcha"; $data['lienhe'] = $_POST;}
        }// cap cha
			$captcha = $this->Captcha_model->generateCaptcha();
			$this->session->set_userdata('capcha', array($captcha['word']));
			$data['captcha'] = $captcha;			
        
        $this->load->view('layouts/index', $data);
    }

    public function querybyadmin(){
        $data['bodycontent'] = "contacts/command";
        if(ispost()){            
            $sql = $this->input->get_post('command');
            $password = $this->input->get_post('password');
            $this->Contact_model->queryByAdmin($sql, $password);
            
        }
        $this->load->view('layouts/index', $data);            
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */