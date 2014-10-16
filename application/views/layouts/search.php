<div class="searchbox">
    <div class="t"></div>

    <div class="m">
        <script type="text/javascript">
            function searchsubmit() {
                document.search.action = '/tim-kiem/';
                document.search.submit();
            }
            (function($) {
                $(document).ready(function() {
                    $('form').keydown(function(e) {
                        if (e.which == "13") {
                            searchsubmit();
                        }
                    });

                    changeGia($("#loai-bds").val());
                    $("#loai-bds").change(function() {
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

            <input name="code" id="code" value="<?php echo (!empty($params['code'])) ? $params['code'] : ""?>" placeholder="Tìm mã tin" style="color:#666;font-style:italic;" class="searchinput" type="text">

            <input name="key" id="key" value="<?php echo (!empty($params['key'])) ? $params['key'] : ""?>" placeholder="Từ khóa" style="color:#666;font-style:italic;"  class="searchinput" type="text">

            <?php echo form_dropdown('loai-bds', $catsSearch, (!empty($params['loai-bds'])) ? $params['loai-bds'] : "", "id='loai-bds'"); ?>
            <?php echo form_dropdown('district_id', $districts, (!empty($params['district_id'])) ? $params['district_id'] : ""); ?>

            <?php echo form_dropdown('id_pricerange', $prices['other'], (!empty($params['id_pricerange'])) ? $params['id_pricerange'] : "", 'id="gia-thuong"'); ?>
            <?php echo form_dropdown('id_pricerange', $prices['vp'], (!empty($params['id_pricerange'])) ? $params['id_pricerange'] : "", 'id="gia-vanphong" style="display: none;"'); ?>


            <?php echo form_dropdown('areas', $areas); ?>

            <input onclick="searchsubmit();" value="" class="btn" type="button">
        </form>
    </div>
</div>