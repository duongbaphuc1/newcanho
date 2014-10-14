<?php
if(!isset($cats)) {
    $type = '100';
    $cats = $this->Categories_model->getAll($type);
}
$count = count($cats);

?>
<div class="bottommenu">
    <div class="float_right"></div>
    <div>
        <center>
            <span class="smalltext">
                <a rel="nofollow" title="Trang chủ" href="/">Trang chủ</a> |
                <?php foreach($cats as $key=>$item):?>
                    <a rel="nofollow" href="<?php echo $item['slug']?>" title="<?php echo $item['category_name']?>">
                        <?php echo $item['category_name']?></a><?php echo ($count != $key + 1) ? " | " : ""?>
                <?php endforeach?>
            </span>
        </center>
    </div>
</div>