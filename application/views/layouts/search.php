<div class="searchbox">
    <div class="t"></div>

    <div class="m">
        <script type="text/javascript">
            function searchsubmit() {
                document.search.action = 'http://canhosaigon.com.vn/tim-kiem/' + document.getElementById('key').value;
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
        <form action="http://canhosaigon.com.vn/tim-kiem/" name="search" method="post">

            <input name="code" id="code" placeholder="Tìm mã tin" style="color:#666;font-style:italic;" onfocus="if (this.value == 'Tìm mã tin') {
                        this.value = '';
                    }" onblur="if (this.value == '') {
                                this.value = 'Tìm mã tin';
                            }" class="searchinput" type="text">

            <input name="key" id="key" placeholder="Từ khóa" style="color:#666;font-style:italic;" onfocus="if (this.value == 'Từ khóa') {
                        this.value = '';
                    }" onblur="if (this.value == '') {
                                this.value = 'Từ khóa';
                            }" class="searchinput" type="text">

            <?php echo form_dropdown('loai-bds', $catsSearch, "", "id='loai-bds'"); ?>
            <?php echo form_dropdown('district_id', $districts); ?>

            <?php echo form_dropdown('id_pricerange', $prices['other'], "", 'id="gia-thuong"'); ?>
            <?php echo form_dropdown('id_pricerange', $prices['vp'], "", 'id="gia-vanphong" style="display: none;"'); ?>


            <?php echo form_dropdown('areas', $areas); ?>

            <input onclick="searchsubmit();" value="" class="btn" type="button">
        </form>
    </div>
</div>