<div class="title_ge red f_utm"><span>Ký gởi - cho thuê</span></div>
<h1 class="tt1"><?php echo $real['title']?></h1>
<div>
    <p><?php echo $real['description'] ?></p>
</div>
<div class="red mt_20px">
    <strong>DỰ ÁN KHÁC:</strong></div>
<ul class="other_pro mt_10px">
    <?php foreach ($other as $val): ?>
    <li><a href="/ky-gui/chitiet/<?php echo convertViToEn($val['title'], $val['id']); ?>">
            » <?php echo $val['title']?>
        </a></li>
    <?php endforeach; ?>    
</ul>