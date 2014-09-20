<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>        
        <?php $this->load->view('layouts/meta'); ?>          
        <script type="text/javascript">
            var root = "<?php echo base_url() ?>";
        </script>                 
        <link rel="canonical" href="<?php echo currenturl()?>"/>
        <link rel="stylesheet" type="text/css" href="/public/styles/css.css"/>
        <script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>        
        <!-- slide -->
        <script type="text/javascript" src="/public/scripts/script.js"></script>
        <script type="text/javascript" src="/public/scripts/jquery_002.js"></script>
        <!-- slide -->
        <script type="text/javascript" src="/public/scripts/tinydropdown.js"></script>
        <!-- jQuery Lazy Load -->
        <script type="text/javascript" src="/public/scripts/jquery.js"></script>
        <!-- Lazy load -->
        <script type="text/javascript" src="/public/scripts/jquery.lazyload.js"></script>
        <script type="text/javascript" charset="utf-8">
            $(function() {

                $(".left img") // img là áp dụng với cả blog. Nếu chỉ muốn áp dụng cho một class nào đó thì thêm class đó vào trước img. Ví dụ: .post img, #content img, .comments img,… 
                        .lazyload({
                            placeholder: "images/preload-img.gif", /*Hình thay thế khi ảnh chưa load xong*/
                            effect: "fadeIn" /* Hiệu ứng mờ khi ảnh xuất hiện. Có thể sử dụng các hiệu ứng khác như: fadeIn,slideUp, slideDown,…*/

                        });
            });
        </script>

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
        <script>
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-41841998-1', 'canhosaigon.com.vn');
            ga('send', 'pageview');
        </script>
    </body>
</html>