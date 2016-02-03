<?php
$CI = &get_instance();

$CI = &get_instance();
$CI->load->model("District_model");
$CI->load->model("Project_model");

$cat_slug = "";
$cat_name = "";
if (isset($real)) {

    $cat_slug = (!empty($real['cat_slug'])) ? $real['cat_slug'] : "";
    $cat_name = (!empty($real['category_name'])) ? $real['category_name'] : "";

} elseif ($listReals) {

    $cat_slug = (!empty($listReals[0]['cat_slug'])) ? $listReals[0]['cat_slug'] : "";
    $cat_name = (!empty($listReals[0]['category_name'])) ? $listReals[0]['category_name'] : "";
}

$listDis = $CI->District_model->getAllWithCat(1, $cat_slug);

if(!empty($cat_slug)){
    $proSlug = "";
    $catProSlug = "";
    if($cat_slug == 'can-ho-cho-thue'){
        $proSlug = 'cho-thue-can-ho';
        $catProSlug = 'can-ho-chung-cu';

    }elseif($cat_slug == 'can-ho-cho-thue'){
        $proSlug = 'cho-thue-can-ho';
        $catProSlug = 'can-ho-chung-cu';

    }elseif($cat_slug == 'van-phong-cho-thue'){
        $proSlug = 'cho-thue-van-phong';
        $catProSlug = 'van-phong-cao-oc';
    }

    // get list project
    if(!empty($district)){
        $listPros = $CI->Project_model->getProjectByCat($catProSlug, $district);
    }else{
        $listPros = $CI->Project_model->getProjectByCat($catProSlug);
    }

}

?>
<div class="theo_quan">
    <div class="t"></div>
    <div class="m">
        <ul>
            <?php foreach ($listDis as $item): ?>
                <li>
                    <a href="/<?php echo $cat_slug . "/" . $item['slug'] ?>"
                       title="<?php echo $cat_name . " " . $item['district_name'] ?>">
                        <h2><?php echo $cat_name . " " . $item['district_name'] ?></h2></a></li>
            <?php endforeach ?>
        </ul>
    </div>
</div>

<!-- du an tieu bieu-->
<?php if(!empty($listPros)): ?>
<div class="datieubieu">
    <div class="t"></div>
    <div class="m">
        <ul>
            <?php foreach($listPros as $item):?>
            <li>
                <a href="/<?php echo $proSlug."-".$item['slug']?>" title="<?php echo $item['project_name']?>"><?php echo $item['project_name']?></a>
            </li>
            <?php endforeach;?>
        </ul>
        <a href="http://canhosaigon.com.vn/du-an-tieu-bieu/" title="Xem tất cả dự án tiêu biểu" style="position:absolute; right:10px;
               bottom:6px; color:#f00;">Xem tất cả</a>
    </div>
</div>
<?php endif; ?>