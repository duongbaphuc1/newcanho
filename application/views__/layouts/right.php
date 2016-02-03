<?php
$cls = $this->router->fetch_class();
$atc = $this->router->fetch_method();
?>
<?php $this->load->view('layouts/search'); ?>
<?php $this->load->view('layouts/social'); ?>
<!-- .theo_quan -->
<?php $this->load->view('layouts/quick_contact'); ?>
<?php
if($cls == 'home') {
    $this->load->view('layouts/advs_fb');
}elseif($cls != "timkiem" && $cls != "contacts"){
    $this->load->view('layouts/cat_district');
}
?>