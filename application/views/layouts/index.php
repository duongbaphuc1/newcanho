<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>        
        <?php $this->load->view('layouts/meta'); ?>          
        <script type="text/javascript">
            var root = "<?php echo base_url() ?>";
        </script>
        <link rel="stylesheet" type="text/css" href="/public/styles/css.css"/>
        <script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>        
        <!-- slide -->
        <script type="text/javascript" src="/public/scripts/script.js"></script>
        <script type="text/javascript" src="/public/scripts/jquery-v1.10.2.min.js"></script>
        <!-- slide -->
        <script type="text/javascript" src="/public/scripts/tinydropdown.js"></script>
        <!-- Lazy load -->
        <script type="text/javascript" src="/public/scripts/jquery.lazyload.js"></script>

    </head>
    <body data-twttr-rendered="true">

        <div class="wrap">            
            <?php $this->load->view('layouts/banner'); ?>
            <?php $this->load->view('layouts/menu'); ?>
            <!-- .menu -->    
            <div class="body">    	
                <div class="left">
                    <?php $this->load->view($bodycontent); ?>
                </div>
                <!-- .left -->

                <div class="right">
                    <?php $this->load->view('layouts/right'); ?>
                </div>
                <!-- .right -->

                <div class="cls">&nbsp;</div>
                <?php $this->load->view('layouts/menu_bottom'); ?>
                <?php $this->load->view('layouts/tagscloud'); ?>                
                <!-- .tagscloud -->

                <div class="copyright">
                    <?php $this->load->view('layouts/footer'); ?>
                </div>
                <!-- .copyright -->
                <div class="cls"></div>
            </div>
            <!-- .body -->
            <div class="cls"></div>
        </div>
        <!-- .wrap -->
        </div>
    </body>
</html>