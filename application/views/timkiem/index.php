<div class="title_ge red f_utm"><span>Kết quả tìm kiếm <?php echo (!empty($keyword))?'"'.$keyword.'"':""; ?> </span></div>
<?php foreach ($listNew as $news): ?>
    <div class="n1 clearfix"> 
        <a href="/tin-tuc/chitiet/<?php echo convertViToEn($news['title'], $news['id']); ?>" title="$news['title']">
            <img alt="<?php echo $news['title'] ?>" src="/public/images/upload/<?php echo $news['image'] ?>" width="100" height="86"></a>
        <h3><a title="<?php echo $news['title']; ?>" href="/tin-tuc/chitiet/<?php echo convertViToEn($news['title'], $news['id']); ?>">
                <strong><?php echo $news['title']; ?></strong></a></h3>
        <div class="date">Ngày đăng:  <?php
            $date = new DateTime($news['created_date']);
            echo $date->format('d/m/Y')
            ?></div>
        <p><?php echo $news['summary'] ?></p>
    </div>
    <!-- bloc item -->
<?php endforeach; ?>
<?php foreach ($project as $news): ?>
    <div class="n1 clearfix"> 
        <a href="/duan/chitiet/<?php echo convertViToEn($news['name'], $news['id']); ?>" title="<?php echo $news['name'] ?>">
            <img alt="<?php echo $news['name'] ?>" src="/public/images/upload/<?php echo $news['image'] ?>" width="100" height="86"></a>
        <h3><a title="<?php echo $news['name']; ?>" href="/tin-tuc/chitiet/<?php echo convertViToEn($news['name'], $news['id']); ?>">
                <strong><?php echo $news['name']; ?></strong></a></h3>
        <div class="date">Ngày đăng:  <?php
            $date = new DateTime($news['created_date']);
            echo $date->format('d/m/Y')
            ?></div>
        <p><?php echo $news['summary'] ?></p>
    </div>
    <!-- bloc item -->
<?php endforeach; ?>
<?php foreach ($kygui as $news): ?>
    <div class="n1 clearfix"> 
        <a href="/ky-gui/chitiet/<?php echo convertViToEn($news['title'], $news['id']); ?>" title="<?php echo $news['title'] ?>">
            <img alt="<?php echo $news['title'] ?>" src="/public/images/upload/<?php echo $news['image'] ?>" width="100" height="86"></a>
        <h3><a title="<?php echo $news['title']; ?>" href="/ky-gui/chitiet/<?php echo convertViToEn($news['title'], $news['id']); ?>">
                <strong><?php echo $news['title']; ?></strong></a></h3>
        <div class="date">Ngày đăng:  <?php
        $date = new DateTime($news['created_date']);
        echo $date->format('d/m/Y')
    ?></div>        
    </div>
    <!-- bloc item -->
<?php endforeach; ?>