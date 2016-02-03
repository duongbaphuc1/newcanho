<?php

$CI = & get_instance();
$CI->load->model("Clouds_model");
$clouds = $CI->Clouds_model->getAll();
?>
<div class="tagscloud">
<?php foreach($clouds as $item):?>
    <strong><a title="<?php echo $item['tag_name']?>" href="<?php echo $item['link']?>"><?php echo $item['tag_name']?></a></strong>
<?php endforeach?>
</div>