<div class="left_main">
    <div class="title_ge font_my">
        DỰ ÁN 
        <?php if ($news['type'] == 'canho'): ?>
            <span>căn hộ</span>
        <?php else: ?>
            <span>đất nền</span>
        <?php endif; ?>
    </div>
    <div class="content_ge">
        <h1 class="green_color" style="font-size:20px; "><?php echo $news['name'] ?></h1>
        <div class="mt_15px">  
           <?php echo $news['description'] ?>
        </div>
    </div>  
    <div class="title_ge font_my mt_15px">DỰ ÁN KHÁC:</div>
    <div class="content_ge">        
        <?php foreach ($other as $key => $val): ?>
            <?php if ($key % 3 == 0): ?>
                <div class="clearfix mb_20px">
                <?php endif; ?>
                <div class="duan">
                    <a href="/duan/chitiet/<?php echo convertViToEn($val['name'], $val['id']); ?>">
                        <img src="/public/images/upload/<?php echo $val['image'] ?>" width="204" height="140"  />
                    </a> 
                    <h3 class="mt_5px">
                        <a href="/duan/chitiet/<?php echo convertViToEn($val['name'], $val['id']); ?>" class="green_color"><?php echo $val['name']?></a>
                    </h3>
                </div>
                    <?php if($key%3== 2 || $key == (count($other) - 1)):?>
                    </div>                    
            <?php endif; endforeach; ?>        
    </div>  

</div>