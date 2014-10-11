<?php
$cls = $this->router->fetch_class();
$atc = $this->router->fetch_method();
$atcLink = $this->uri->segment(1);
$type = '100';
$cat = $this->Categories_model->getAll($type);
?>
<div class="menu">
    <ul id="nav">
        <?php foreach($cat as $item): ?>
        <li>
            <a href="/<?php echo $item['slug']?>" title="<?php echo $item['category_name']?>"><?php echo $item['category_name']?><span>&nbsp;</span></a>
        </li>
        <?php endforeach?>
        <li class="last"><a rel="nofollow" href="lien-he.html" title="Liên hệ ĐỊA ỐC MỸ HƯNG">LIÊN HỆ<span>&nbsp;</span></a></li>
    </ul>

    <script type="text/javascript">
        var dropdown = new TINY.dropdown.init("dropdown", {id: 'nav', active: 'menuhover'});
    </script>   
</div>