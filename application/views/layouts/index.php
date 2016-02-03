<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>        
        <?php $this->load->view('layouts/meta'); ?>          
        <script type="text/javascript">
            var root = "<?php echo base_url() ?>";
        </script>

        <link rel="stylesheet" type="text/css" href="/public/styles/style.css"/>
        <script type="text/javascript" src="/public/scripts/script.min.js"></script>

        <script type="text/javascript">
//            $(function() {
//                $(".left img")
//                    .lazyload({
//                        placeholder: "images/preload-img.gif",
//                        effect: "fadeIn"
//                    });
//            });
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
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41841998-1', 'canhosaigon.com.vn');
  ga('send', 'pageview');

</script>
<!--Start of Zopim Live Chat Script-->
<script type="text/javascript">
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
$.src='//v2.zopim.com/?1y1DQU4Qk3b8xLOa52iEWT2voJW2GHks';z.t=+new Date;$.
type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
</script>
<!--End of Zopim Live Chat Script-->
    </body>
</html>
