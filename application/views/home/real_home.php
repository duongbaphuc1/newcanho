<div id="slide">
    <div id="slider" style="overflow: hidden;">
        <ul>
            <?php foreach($listNewHome as $item):
                $image = proccessimg($item['image']);
                $majorImage = (!empty($image)) ? $image[0] : "";
                ?>
            <li><a href="<?php echo convertViToEn($item['title'], $item['id']); ?>i.html" title="<?php echo $item['title']?>">
                    <img original="/upload/@files/<?php echo $majorImage?>" alt="<?php echo $item['title']?>" data-src="/upload/@files/<?php echo $majorImage?>" class="news_img lazy"></a>
                <div class="news_des">
                    <a href="<?php echo convertViToEn($item['title'], $item['id']); ?>i.html" title="<?php echo $item['title']?>">
                        <?php echo substr($item['title'], 0, strpos($item['title'], ' ', 35))?>...</a>
                    <p><?php
                        $description = trim(preg_replace('/\s+/', ' ', strip_tags($item['description'])));
                        if(strlen($description) > 600){
                            echo substr(strip_tags($item['description']), 0, strpos(strip_tags($description), ' ', 600));
                        }else{
                            echo $description;
                        }
                    ?></p>
                </div>
            </li>
            <?php endforeach ;?>
        </ul>
    </div>
    <ul class="pagination" id="pagination">
        <li onclick="slideshow.pos(0)" class="current"></li>   
        <li onclick="slideshow.pos(1)" class="" current""=""></li>   
        <li onclick="slideshow.pos(2)" class=""></li>   
        <li onclick="slideshow.pos(3)" class=""></li>   
    </ul>
    <div class="cls"></div>
    <script type="text/javascript">
        var slideshow = new TINY1.slider.slide('slideshow', {
            id: 'slider',
            auto: 3,
            resume: true,
            vertical: false,
            navid: 'pagination',
            activeclass: 'current',
            position: 0
        });
    </script>
</div>
<!-- #slide -->            
<h2 class="bds_moi_nhat_tit">Căn hộ cho thuê mới nhất</h2>
<div class="bds_moi_nhat_cont">
    <?php $totalList = count($listRealHome);?>
    <?php foreach($listRealHome as $key=>$item):?>
        <?php
            $image = proccessimg($item['image']);
            $majorImage = (!empty($image)) ? $image[0] : "";
        ?>
    <div class="item_home <?php echo ($key%2 == 1) ? "r" : ""?> <?php echo ($key == $totalList-2 || $key == $totalList-1) ? "last" : ""?> ">
        <a href="<?php echo convertViToEn($item['title'], $item['id']); ?>i.html" title="<?php echo $item['title'] ?>">
            <img class="lazy" original="/upload/@files/<?php echo $majorImage?>" src="" data-src="/upload/@files/<?php echo $majorImage?>" alt="<?php echo $item['id'] ?> - <?php echo $item['district_name'] ?> - <?php echo $item['title'] ?>"></a>
        <a href="<?php echo convertViToEn($item['title'], $item['id']); ?>i.html" title="<?php echo $item['title'] ?>"><?php echo $item['title'] ?></a>

        <div class="bottom">Giá: <b><?php echo $item['price']?></b>  - <span><?php echo $item['district_name']?></span></div>
        <div class="bottom_line">&nbsp;</div>	
    </div>
    <?php endforeach?>
    <div class="cls"></div>    
</div><!-- bgs_moi_nhat_cont -->