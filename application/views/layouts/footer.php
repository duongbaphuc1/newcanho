<?php
$CI = & get_instance();
$CI->load->model("Link_model");
$lists = $CI->Link_model->getLinks();
$contact = $this->session->userdata('contact');
?>
<p>
    Copyright © 2012 
    <strong>
        <a href="http://canhosaigon.com.vn/van-phong-cho-thue/quan-1/" title="Văn Phòng Cho Thuê Quận 1 - Văn phòng cho thuê quận 3 - Văn phòng cho thuê quận tân bình">Địa Ốc Mỹ Hưng</a>
    </strong>

    <a href="https://plus.google.com/108462358367487568101/posts" rel="author" title="Trang G+ của BĐS Mỹ Hưng"> 
        <img src="http://www.google.com/images/icons/ui/gprofile_button-16.png" alt="" width="16" height="16"> </a>
    <a href="https://twitter.com/vanphongmyhung" title="Trang TWITTER của BĐS Mỹ Hưng"> 
        <img src="http://canhosaigon.com.vn/images/twitter.jpg" alt="" width="16" height="16"> </a>
        <g:plusone size="medium"></g:plusone>
    <a href="http://mrphuc.blogspot.com/p/phuc.html" target="_blank">Designed by Mr Phuc</a>
</p>