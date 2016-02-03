<div class="box-news">
    <?php foreach ($listNews as $news):?>
    <div class="box">
        <a class="thumb" title="" href="/duan/chitiet/<?php echo convertViToEn($news['name'], $news['id']); ?>">
            <img width="297" height="148" src="/public/images/upload/<?php echo $news['image']?>" alt=""/></a>
        <h2><a href="/duan/chitiet/<?php echo convertViToEn($news['name'], $news['id']); ?>" title="<?php $news['name']?>"><?php echo $news['name']?></a></h2>
        <p class="desc">
            <?php echo $news['summary']?>
        </p>
        <span class="link-1">
            <a href="/duan/chitiet/<?php echo convertViToEn($news['name'], $news['id']); ?>" title="Chi tiết">Chi tiết</a>
        </span>
    </div> <!-- end box -->    
    <?php endforeach;?>
</div> <!-- end box news -->