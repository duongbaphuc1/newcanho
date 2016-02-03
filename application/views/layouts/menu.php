<?php
$cls = $this->router->fetch_class();
$atc = $this->router->fetch_method();
$atcLink = $this->uri->segment(1);
$type = '100';
if(!isset($cats)) {
    $cats = $this->Categories_model->getAll($type);
}
?>
<nav class="menu">
    <ul id="nav">
        <?php foreach($cats as $item): ?>
            <li>
                <?php if($item['slug'] == 'van-phong-cho-thue'): ?>
                    <a href="/<?php echo $item['slug']?>" title="<?php echo $item['category_name']?>"><?php echo $item['category_name']?><span>&nbsp;</span></a>
                <?php else:?>
                    <a href="/<?php echo $item['slug']?>" title="<?php echo $item['category_name']?>"><?php echo $item['category_name']?><span>&nbsp;</span></a>   <?php endif?>
            </li>
        <?php endforeach?>
        <li class="last"><a rel="nofollow" href="lien-he.html" title="Liên hệ ĐỊA ỐC MỸ HƯNG">LIÊN HỆ<span>&nbsp;</span></a></li>
    </ul>
    <a href="#" id="pull">Menu</a>
</nav>
<script>
    $(function() {
        var pull    = $('#pull');
        menu    = $('nav ul');
        menuHeight  = menu.height();

        $(pull).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });

        $(window).resize(function(){
            var w = $(window).width();
            if(w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });
</script>