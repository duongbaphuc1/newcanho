<?php $this->load->view('layouts/breadcrumb');?>
<h1>Kết quả tìm kiếm</h1>
<div class="list">
    <?php
    if(!empty($results)):
    foreach ($results as $key => $item):
    $image = proccessimg($item['image']);
    $majorImage = (!empty($image)) ? $image[0] : "";
    ?>
    <div class="item">
        <a href="/<?php echo convertViToEn($item['title'], $item['id']); ?>i.html"
           title="<?php echo $item['title'] ?>">
            <img src="/public/images/upload/<?php echo $majorImage?>"
                 alt="<?php echo $item['title'] ?>"
                 original="/public/images/upload/<?php echo $majorImage?>"></a>

        <h2>
            <a href="/<?php echo convertViToEn($item['title'], $item['id']); ?>i.html"
               title="<?php echo $item['title'] ?>">
                <?php echo preg_replace('/\s+?(\S+)?$/', '', substr(strip_tags($item['description']), 0, 150));?>...
        <div class="bottom">
            <div>Mã tin: <?php echo $item['id']?></div>
            <div><span><a href="/<?php echo $item['cat_slug']?>/<?php echo $item['slug_dis']?>"> <?php echo $item['district_name']?></a></span></div>
        </div>

        <div class="pricebox">
            <div style="font-size:20px; text-align:center; margin:20px; 0 0 0;">Giá</div>
            <div style="color:#f00; text-align:center; font-size:17px; margin:0px 0 0;">
                <?php echo $item['price'] ?>
            </div>
        </div>

        <div class="bottom_line">&nbsp;</div>
    </div>
    <?php endforeach; endif?>
    <div class="cls"></div>
    <?php echo $pagination;?>
</div>
<script>
    var search = {
        init: function(){
            search.changeAttr();
        },
        changeAttr: function(){
            $(".manu a").each(function(){
                if($(this).attr('href') != "#"){
                    $(this).attr('url', $(this).attr('href'));
                    $(this).attr('href', "javascript:void()");
                    $(this).click(function(){
                        document.search.action = $(this).attr("url");
                        document.search.submit();
                    });
                }
            });
        }
    };
    $(document).ready(search.init);
</script>