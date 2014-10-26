<?php
$type = get_cookie('method');
$type = (!empty($type)) ? get_cookie('method') : 100;
?>
<!-- tab content -->
<link rel="stylesheet" type="text/css" href="/public/styles/tab.css"/>
<script type="text/javascript" src="/public/scripts/organictabs.jquery.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<script type='text/javascript'>
    $(function () {
        $("#search_tab").organicTabs({
            "speed": 200
        });
    });
    function setCookiesForMethod(type){
        if(type == 'ban') {
            $.cookie('method', 111);
        }else{
            $.cookie('method', 100);
        }
        window.location = '/';
    }
</script>

<!-- tab content -->
<div class="searchbox">
    <div class="t"></div>
    <div id="search_tab">
        <ul class="nav">
            <li class="nav-one" style="margin-left: 10px">
                <a href="#rentform" <?php echo ($type == 100) ? 'class="current"' : ""?> onclick="setCookiesForMethod('thue')"><span>Thuê</span></a>
            </li>
            <li class="nav-three">
                <a href="#sellform" <?php echo ($type == 111) ? 'class="current"' : ""?> onclick="setCookiesForMethod('ban')"><span>Bán</span></a>
            </li>
        </ul>

        <div class="m nav-one">
            <script type="text/javascript">
                function searchsubmit() {
                    document.search.action = '/tim-kiem/';
                    document.search.submit();
                }
                (function ($) {
                    $(document).ready(function () {
                        $('form').keydown(function (e) {
                            if (e.which == "13") {
                                searchsubmit();
                            }
                        });

                        changeGia($("#loai-bds").val());
                        $("#loai-bds").change(function () {
                            changeGia($(this).val());
                        });
                    });
                    function changeGia(id) {
                        if (id == 92) {
                            $("#gia-thuong").hide();
                            $("#gia-thuong").attr("name", "id_pricerange_tmp");
                            $("#gia-vanphong").show();
                            $("#gia-vanphong").attr("name", "id_pricerange");
                        } else {
                            $("#gia-vanphong").hide();
                            $("#gia-vanphong").attr("name", "id_pricerange_tmp");
                            $("#gia-thuong").show();
                            $("#gia-thuong").attr("name", "id_pricerange");
                        }
                    }
                }(jQuery));
            </script>
            <form action="/tim-kiem" name="search" id="frm-search" method="post">

                <input name="code" id="code" value="<?php echo (!empty($params['code'])) ? $params['code'] : "" ?>"
                       placeholder="Tìm mã tin" style="color:#666;font-style:italic;" class="searchinput" type="text">

                <input name="key" id="key" value="<?php echo (!empty($params['key'])) ? $params['key'] : "" ?>"
                       placeholder="Từ khóa" style="color:#666;font-style:italic;" class="searchinput" type="text">

                <?php echo form_dropdown('loai-bds', $catsSearch, (!empty($params['loai-bds'])) ? $params['loai-bds'] : "", "id='loai-bds'"); ?>
                <?php echo form_dropdown('district_id', $districts, (!empty($params['district_id'])) ? $params['district_id'] : ""); ?>

                <?php echo form_dropdown('id_pricerange', $prices['other'], (!empty($params['id_pricerange'])) ? $params['id_pricerange'] : "", 'id="gia-thuong"'); ?>
                <?php echo form_dropdown('id_pricerange', $prices['vp'], (!empty($params['id_pricerange'])) ? $params['id_pricerange'] : "", 'id="gia-vanphong" style="display: none;"'); ?>


                <?php echo form_dropdown('areas', $areas); ?>

                <input onclick="searchsubmit();" value="" class="btn" type="button">
            </form>
        </div>
    </div>
</div>