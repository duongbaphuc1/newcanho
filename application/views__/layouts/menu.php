<?php
$cls = $this->router->fetch_class();
$atc = $this->router->fetch_method();
$atcLink = $this->uri->segment(1);
$type = '100';
if(!isset($cats)) {
    $cats = $this->Categories_model->getAll($type);
}
?>
<nav class="menu">
    <ul id="nav">
        <li><a href="">Căn Hộ Cho Thuê<span>&nbsp;</span></a></li>
        <li><a href="">Căn hộ dịch vụ<span>&nbsp;</span></a></li>
        <li><a href="">Villa Cho Thuê<span>&nbsp;</span></a></li>
        <li><a href="">Cho Thuê Nhà <span>&nbsp;</span></a></li>
        <li><a href="">LIÊN HỆ<span>&nbsp;</span></a></li>
    </ul>
    <a href="#" id="pull">Menu</a>
</nav>