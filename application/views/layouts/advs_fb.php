<?php
$CI = & get_instance();
$CI->load->model("Advertising_model");
$advs = $CI->Advertising_model->getAll(1);
?>
<div class="partner">
    <div class="t"></div>

    <div class="m">
        <?php foreach ($advs as $key=>$adv): ?>
        <a href="<?php echo $adv['link'] ?>" target="_blank" title="<?php echo $adv['name'] ?>">
            <img src="/public/images/<?php echo $adv['image'] ?>" alt="<?php echo $adv['name'] ?>">
        </a>
        <?php endforeach?>
    </div>
</div>
<div class="partner">
    <div class="th"></div>
    <div class="m">
        <center><div id="fb-root"></div>
            <script>(function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id))
                        return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/vi_VN/all.js#xfbml=1";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));</script>
            <div class="fb-like" data-href="http://www.facebook.com/canhosaigonquan1" data-send="false" data-width="220" data-show-faces="true" data-font="arial"></div></center>
    </div>
</div>