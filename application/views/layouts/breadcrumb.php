<?php

$controller =  $this->router->fetch_class();
$action  = $this->router->fetch_method();

if($controller == 'reals'){
    if($action == 'detail'){
        $cat = $this->Categories_model->getCatById($real['category_id']);
        $this->breadcrumb->addCrumb($cat['category_name'], $cat['slug']."/".$real['slug_dis']);
        $this->breadcrumb->addCrumb($real['project_name'], $real['slug_pro']);
    }
}
?>
<ul class="breadcrumb">
    <?php echo $this->breadcrumb->makeBread();?>
</ul>