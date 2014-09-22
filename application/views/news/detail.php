<div class="title_ge red f_utm"><span>TIN TỨC</span></div>
<h1 class="tt1"><?php echo $news['title'] ?></h1>
<div>
    <p><?php echo $news['description'] ?></p>
</div>

<div class="red mt_20px"><strong>TIN KHÁC:</strong></div>
<ul class="other_pro mt_10px">
    <?php foreach ($other as $val): ?>
    <li><a href="/tin-tuc/chitiet/<?php echo convertViToEn($val['title'], $val['id']); ?>">» <?php echo $val['title'] ?></a></li>
    <?php endforeach;?>    
</ul>