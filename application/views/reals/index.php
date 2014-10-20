<?php $this->load->view('layouts/breadcrumb');?>
    <h1 style="text-transform:uppercase;">
        <?php
            if(isset($isPro)){
                $titleBar = (!empty($listReals[0]['pro_name'])) ? $listReals[0]['pro_name'] : "";
            }else{
                $titleBar = (!empty($listReals[0]['category_name'])) ? $listReals[0]['category_name'] : "";
            }
        echo $titleBar;
        ?>
    </h1>

<div class="list">
    <?php foreach ($listReals as $key => $item):
        $image = proccessimg($item['image']);
        $majorImage = (!empty($image)) ? $image[0] : "";
        ?>
    <div class="item">
        <a href="/<?php echo convertViToEn($item['title'], $item['id']); ?>i.html" title="<?php echo $item['title'] ?>">
            <img src="/public/images/upload/<?php echo $majorImage?>" alt="<?php echo $item['id'] ?> - <?php echo $item['title'] ?>" /></a>
        <h3><a href="/<?php echo convertViToEn($item['title'], $item['id']); ?>i.html" title="<?php echo $item['title'] ?>">
                <?php echo $item['title'] ?></a></h3>
        <p>
            <?php echo preg_replace('/\s+?(\S+)?$/', '', substr(strip_tags($item['description']), 0, 150));?>...
        </p>
        <div class="bottom">
            <div><span><a href="/<?php echo $item['cat_slug']?>/<?php echo $item['dis_slug']?>"> <?php echo $item['district_name']?></a></span></div><div>Mã tin: <?php echo $item['id']?></div>
        </div>
        <div class="pricebox">
            <div style="font-size:20px; text-align:center; margin:20px 0 0 0;">Giá</div>
            <div style="color:#f00; text-align:center; font-size:17px; margin:0px 0 0;">
                <?php echo $item['price'] ?>
            </div>
        </div>
        <div class="bottom_line">&nbsp;</div>
    </div>
    <?php endforeach?>
</div>
<?php echo $pagination; ?>