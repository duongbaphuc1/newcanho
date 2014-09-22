<?php
$CI = & get_instance();
$CI->load->model("Advertising_model");
$advs = $CI->Advertising_model->getAll(1);
?>
<div class="slidder">
    <div class="slidder_content">
        <div class="sadown_left"></div>
        <div class="sadown_right"></div>
        <div class="box_skitter box_skitter_large">
            <ul>
                <?php foreach ($advs as $key=>$adv): ?>      
                <li><a href="<?php echo $adv['link'] ?>"><img src="/public/images/upload/<?php echo $adv['image'] ?>" class="slide<?php echo $key;?>" /></a> </li>
                <?php endforeach;?>
            </ul>
        </div>
    </div>
</div>