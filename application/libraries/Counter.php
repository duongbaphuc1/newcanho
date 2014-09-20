<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * CodeIgniter
 *
 * An open source application development framework for PHP 4.3.2 or newer
 *
 * @package		CodeIgniter
 * @author		Nguyễn Phi Bình
 * @copyright	Copyright (c) 2010.
 * @since		Version 1.0
 * @filesource
 */

// ------------------------------------------------------------------------

/**
 * Counter Class
 *
 * @package		CodeIgniter
 * @subpackage	Libraries
 * @category	Counters
 * @author		Nguyễn Phi Bình
 */

Class Counter {
	
	private $CI;
	private $sess_timeout = 900; //15 Phút
	public $online;
	public $online_day;
	public $visitor;
	public $arritem;
	/**
	 * Counter Constructor
	 *
	 * Counter Constructor sẽ tự động chạy khi class này được khởi tạo.
	 */
	function Counter(){
		//Khởi động session
		session_start();
		
		// Set the super object to a local variable for use throughout the class
		$this->CI =& get_instance();
		
		//Dùng databse thì phải load cái này lên
		$this->CI->load->database();
		
		$sessionid = session_id() ; 
		$sessiontime = time();	
		$sessionip = $_SERVER['REMOTE_ADDR'];
		$sessiondate = date("Y-m-d H:i:s");
		$today = date("Y-m-d");	
		$past = $sessiontime - $this->sess_timeout ; 
		
		//Xóa các sesion đã quá hạn
		$this->CI->db->delete('counter_online', array('sessiontime <' => $past));
		
		//Xóa các session đã quá ngày
		$this->CI->db->delete('counter_date', array('sessiondate <' => $today));
		
		//Kiểm tra xem session_id đã tồn tại hay chưa
		$query = $this->CI->db->get_where('counter_online',array('sessionid'=>$sessionid));
		$results = $query->result();
		
		// Nếu đã tồn tại
		if(count($results)>0){
			
			// Cập nhật thời gian active trong bảng counter_online
			$data = array('sessiontime'=>$sessiontime);
			$this->CI->db->where('sessionid',$sessionid);
			$this->CI->db->update('counter_online',$data);
			
			//Cập nhật lại thời gian active trong bảng counter_date
			
			$data = array('sessiondate'=>$sessiondate);
			$this->CI->db->where('sessionid',$sessionid);
			$this->CI->db->update('counter_date',$data);
			
		}else{
			// Ngược lại nếu chưa tồn tại session_id
			//Insert session mới vào bảng counter_online
			$data = array(
               'sessionid'   => $sessionid ,
               'sessiontime' => $sessiontime ,
               'sessionip'   => $sessionip
            );
			$this->CI->db->insert('counter_online',$data);
			
			//Inser session mới vào bảng counter_date
			$data = array(
               'sessionid'   => $sessionid ,
               'sessiondate' => $sessiondate 
            );
			$this->CI->db->insert('counter_date',$data);
			
			// Lấy tổng số lượt truy cập hiện tại của website
			
			$query = $this->CI->db->get('counter_total');
			$result = $query->result();
				// Nếu tổng lượt truy cập hiện tại lớn hơn 0
				if(count($result)>0){
					$counter = $result[0]->counter;
					$counter = $counter+1;
					// Cập nhật thêm tổng số lượt truy cập
					$data = array('counter'=>$counter);
					$this->CI->db->update('counter_total',$data);
				}
				else{
				 	// Nếu chưa có lượt truy cập khởi tạo là 1
					$data = array('counter'=>1);
					$this->CI->db->insert('counter_total',$data);	
				}
			
		}

	}
	
	/**
	 * Function: Visitor 
	 * Return Object;	
	 * Author: Nguyễn phi Bình.
	 */
	
	
	function getvisitor(){
		//Số người đang online.
		$query = $this->CI->db->get('counter_online');
		$result = $query->result();
		$this->online = count($result);
		
		
		//Số người online trong ngày
		$query = $this->CI->db->get('counter_date');
		$result = $query->result();
		$this->online_day = count($result);
		
		
		//Tổng số lượt truy cập
		$query = $this->CI->db->get('counter_total');
		$result = $query->result();
		$this->visitor = $result[0]->counter;
		
		
		// Add counter to array
		$arritem = array('online'=>$this->online, 'today'=>$this->online_day,'visitor'=>$this->visitor);
		return $arritem;

	}
	
	
}