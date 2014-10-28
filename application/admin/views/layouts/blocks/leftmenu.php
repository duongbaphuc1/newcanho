<div class="span2 main-menu-span">
    <div class="well nav-collapse sidebar-nav">
        <ul class="nav nav-tabs nav-stacked main-menu">
            <?php $role = USER_ROLE; if($role=="admin"):?>
            <li><a class="ajax-link" href="/admin"><i class="icon-home"></i><span class="hidden-tablet"> Dashboard</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/realestate"><i class="icon-eye-open"></i><span class="hidden-tablet"> Tin Bất Động Sản</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/projects"><i class="icon-edit"></i><span class="hidden-tablet"> Dự án</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/areas"><i class="icon-edit"></i><span class="hidden-tablet"> Diện tích</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/prices"><i class="icon-font"></i><span class="hidden-tablet"> Khoảng giá</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/categories"><i class="icon-font"></i><span class="hidden-tablet"> Loại địa ốc</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/advs"><i class="icon-edit"></i><span class="hidden-tablet"> Quảng cáo</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/quans"><i class="icon-font"></i><span class="hidden-tablet"> Quận</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/tags"><i class="icon-font"></i><span class="hidden-tablet"> Tags</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/configs"><i class="icon-font"></i><span class="hidden-tablet"> Configs</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/contacts"><i class="icon-envelope"></i><span class="hidden-tablet"> Liên hệ</span></a></li>
            <li><a class="ajax-link" href="/admin/index.php/users"><i class="icon-user"></i><span class="hidden-tablet"> Users</span></a></li>
            <li><a href="/admin/index.php/users/login"><i class="icon-lock"></i><span class="hidden-tablet"> Login Out</span></a></li>
            <?php else:?>
            <li><a class="ajax-link" href="/admin"><i class="icon-home"></i><span class="hidden-tablet"> Dashboard</span></a></li>       
            <li><a class="ajax-link" href="/admin/index.php/realestate"><i class="icon-eye-open"></i><span class="hidden-tablet"> Tin Bất Động Sản</span></a></li>
            <li><a href="/admin/index.php/users/login"><i class="icon-lock"></i><span class="hidden-tablet"> Login Out</span></a></li>
            <?php endif; ?>
        </ul>		
    </div><!--/.well -->
</div>