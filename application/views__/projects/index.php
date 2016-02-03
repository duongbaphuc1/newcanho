<div class="left_main">
    <div class="title_ge font_my">
        <?php if ($type == 'canho'): ?>
            <span>DỰ ÁN CĂN HỘ</span>
        <?php elseif ($type == 'datnen'): ?>
            <span>DỰ ÁN ĐẤT NỀN</span>
        <?php else: ?>
            <span>Tags</span>
        <?php endif; ?>
    </div>
    <div class="content_ge">
        <?php
        foreach ($listPros as $key => $news):
            if ($key % 3 == 0):
                ?>
                <div class="clearfix mb_20px">
                <?php endif; ?>
                <div class="duan">
                    <a title="<?php echo $news['name']?>" href="/duan/chitiet/<?php echo convertViToEn($news['name'], $news['id']); ?>">
                        <img alt="<?php echo $news['name']?>" src="/public/images/upload/<?php echo $news['image'] ?>" width="204" height="140"  />
                    </a> 
                    <h3 class="mt_5px">
                        <a title="<?php echo $news['name']?>" href="/duan/chitiet/<?php echo convertViToEn($news['name'], $news['id']); ?>" class="green_color"><?php echo $news['name'];?></a>
                    </h3>
                </div>                
                <?php if ($key % 2 != 0 || count($listPros) - 1 == $key): ?>
                </div>
            <?php endif; ?>
        <?php endforeach; ?>
        
        <!--<div class="pages mt_15px"  align="center"><strong><a href="#">&laquo;</a><a href="#">&#8249;</a><a href="#" id="cur">1</a><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#">&#8250;</a><a href="#">&raquo;</a></strong></div>-->
    </div>  
</div>
<?php if ($type != 'tag') echo $pagination ?>