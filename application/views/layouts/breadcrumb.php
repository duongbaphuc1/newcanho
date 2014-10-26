<?php

$controller =  $this->router->fetch_class();
$action  = $this->router->fetch_method();

//echo $controller;
//echo $action;

if($controller == 'reals'){
    if($action == 'detail') {

        $cat = $this->Categories_model->getCatById($real['category_id']);
        $this->breadcrumb->addCrumb($cat['category_name'], "/" . $cat['slug']);
        $this->breadcrumb->addCrumb($cat['category_name'] . " " . $real['district_name'], "/" . $cat['slug'] . "/" . $real['slug_dis']);

        $cat_slug = (!empty($real['cat_slug'])) ? $real['cat_slug'] : "";

        if ($cat_slug == 'can-ho-cho-thue') {
            $proSlug = 'cho-thue-can-ho';

        } elseif ($cat_slug == 'can-ho-cho-thue') {
            $proSlug = 'cho-thue-can-ho';

        } elseif ($cat_slug == 'van-phong-cho-thue') {
            $proSlug = 'cho-thue-van-phong';
        }
        if (!empty($proSlug)){
            $this->breadcrumb->addCrumb($cat['category_name'] . " " . $real['project_name'], "/" . $proSlug . "-" . $real['slug_pro']);
        }
    }elseif($action == "filter"){

        if(isset($listReals)){

            if($listReals[0]['category_name']){

                $this->breadcrumb->addCrumb($listReals[0]['category_name'], "/".$listReals[0]['cat_slug']);
                $quan = $this->uri->segment(2, 0);
                if(!empty($quan)){
                    $this->breadcrumb->addCrumb($listReals[0]['category_name']." ".$listReals[0]['district_name'], "#");
                }
            }
        }

    }
}
?>
<ul class="breadcrumb">
    <?php echo $this->breadcrumb->makeBread();?>
</ul>