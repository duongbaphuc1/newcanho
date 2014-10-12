<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

################################################
# Pagination Feature 
# Auth: phuc.duong
# Required: jquery, form_helper
################################################

if ( ! function_exists('proccessimg'))
{
	function proccessimg($imageStr){
        $imageArr = explode("&fieldbreak;", $imageStr);
        return $imageArr;
	}	
}