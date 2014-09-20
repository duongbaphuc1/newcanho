<div class="left_main">
    <div class="title_ge font_my">TIN TỨC - SỰ KIỆN</div>

    <div class="content_ge">
        <?php foreach ($listNew as $news): ?>
            <div class="news_large clearfix new1_all"> 
                <a href="/tin-tuc/chitiet/<?php echo convertViToEn($news['title'], $news['id']); ?>">
                    <img src="/public/images/upload/<?php echo $news['image'] ?>" width="80" height="78"  class="bd1 bd"/></a>
                <h2><a href="/tin-tuc/chitiet/<?php echo convertViToEn($news['title'], $news['id']); ?>" class="green_color"><strong>Thị trường nhà đất khởi sắc nhờ những chính sách mới </strong></a></h2>
                <span class="date">Ngày đăng :<?php
                    $date = new DateTime($news['created_date']);
                    echo $date->format('d/m/Y')
                    ?></span> 
                <div><?php echo $news['summary'] ?></div>
            </div>
<?php endforeach; ?>            
    </div>
    <div class="pages mt_10px" align="center">
<?php echo $pagination ?>
    </div>
</div>