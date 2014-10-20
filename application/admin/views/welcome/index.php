<?php $info = $this->session->userdata("users")?>
<h2>Welcome <?php echo (!empty($info['full_name']))?$info['full_name']:""; ?> !</h2>
<!--<div class="row-fluid sortable ui-sortable">
    <a data-rel="tooltip" class="well span4 top-block" href="/admin/index.php/news" data-original-title="">
        <img src="/public/images/icon/product.png">
        <div>Tin tức</div>
    </a>

    <a data-rel="tooltip" class="well span4 top-block" href="/admin/index.php/projects" data-original-title="">
        <img src="/public/images/icon/cat.png">
        <div>Dự án</div>
    </a>

    <a data-rel="tooltip" class="well span4 top-block" href="/admin/index.php/reals" data-original-title="">
        <img src="/public/images/icon/coins.png">
        <div>Tin bds</div>
    </a>
</div>
<div class="row-fluid sortable ui-sortable">&nbsp;</div>
<div class="row-fluid sortable ui-sortable">
    <a data-rel="tooltip" class="well span4 top-block" href="/admin/index.php/users" data-original-title="">
        <img src="/public/images/icon/users.png">
        <div>Users</div>
    </a>

    <a data-rel="tooltip" class="well span4 top-block" href="/admin/index.php/advs" data-original-title="">
        <img src="/public/images/icon/paleta.png">
        <div>Quảng cáo</div>
    </a>

    <a data-rel="tooltip" class="well span4 top-block" href="/admin/index.php/users/login" data-original-title="">
        <img src="/public/images/icon/logout.png">
        <div>Logout</div>
    </a>
</div>-->