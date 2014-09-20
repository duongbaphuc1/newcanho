<div class="title_ge red f_utm"><span>KÝ GỞI - CHO THUÊ</span></div>
<?php
foreach ($listReals as $key => $news):
    if ($key % 2 == 0):
        ?>
        <div class="pro_all clearfix">    
        <?php endif; ?>
        <div class="n2  <?php echo ($key % 2 == 0) ? "fl" : "fr" ?>"> 
            <a href="/ky-gui/chitiet/<?php echo convertViToEn($news['title'], $news['id']); ?>" title="<?php echo $news['title'] ?>">
                <img src="/public/images/upload/<?php echo $news['image'] ?>" width="100" height="80">
            </a>
            <div class="content_n2">
                <h2><a href="/ky-gui/chitiet/<?php echo convertViToEn($news['title'], $news['id']); ?>"><?php echo $news['title'] ?></a></h2>
                Vị trí:<a href="#" class="vitri"> <?php echo $news['district_name']?> - TP.HCM</a><br>
                <DIV class="date">Ngày đăng: <?php $date = new DateTime($news['created_date']);
                        echo $date->format('d/m/Y')?></DIV>
            </div>
        </div>
        <?php if ($key % 2 != 0 || count($listReals) - 1 == $key): ?>
        </div>
    <?php endif; ?>
<?php endforeach; ?>
<?php echo $pagination; ?>