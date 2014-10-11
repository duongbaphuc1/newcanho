<?php
$CI = & get_instance();

$CI = & get_instance();
$CI->load->model("District_model");
$listDis = $CI->District_model->getAll(1);

$cat_slug = "";
$cat_name = "";
if(isset($real)){
    $cat_slug = (!empty($real['cat_slug'])) ? $real['cat_slug'] : "";
    $cat_name = (!empty($real['category_name'])) ? $real['category_name'] : "";
}elseif($listReals){
    $cat_slug = (!empty($listReals[0]['cat_slug'])) ? $listReals[0]['cat_slug'] : "";
    $cat_name = (!empty($listReals[0]['category_name'])) ? $listReals[0]['category_name'] : "";
}
?>
<div class="theo_quan">
    <div class="t"></div>
    <div class="m">
        <ul>
            <?php foreach($listDis as $item):?>
            <li>
                <a href="/<?php echo $cat_slug."/".$item['slug']?>" title="Căn Hộ Cho Thuê Quận 1"><h2><?php echo $cat_name." ".$item['district_name']?></h2></a></li>
            <?php endforeach?>
        </ul>
    </div>
</div>