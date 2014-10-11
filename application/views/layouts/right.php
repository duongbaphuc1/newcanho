<?php
$CI = & get_instance();
//$CI->load->model("District_model");
//$lists = $CI->District_model->getDistrict();

//$CI->load->model('Tag_model');
//$tags = $CI->Tag_model->getAllForSelectBox();
//
//$CI->load->model("Advertising_model");
//$advs = $CI->Advertising_model->getAll(0);
//
//$CI->load->model("Searchbox_model");
//
//$CI->Searchbox_model->setTable('rent_type');
//$rent = $CI->Searchbox_model->getDataSearchBox('rent');
//
//$CI->Searchbox_model->setTable('real_type');
//$real = $CI->Searchbox_model->getDataSearchBox('real');
//
//$CI->Searchbox_model->setTable('range_price');
//$price = $CI->Searchbox_model->getDataSearchBox('price');


$cls = $this->router->fetch_class();
$atc = $this->router->fetch_method();
?>

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

            <select name="id_loaisanpham" id="loai-bds">
                <option selected="selected" value="">- Chọn loại bất động sản -</option>                
                <option value="95">Căn Hộ Cho Thuê</option>
                <option value="105">Căn hộ dịch vụ</option>
                <option value="104">Villa Cho Thuê</option>
                <option value="91">Cho Thuê Nhà </option>
                <option value="92">Văn Phòng Cho Thuê</option>

            </select>                
            <select name="id_district" id="district">
                <option selected="selected" value="">Chọn quận / huyện</option>
                <option value="50">Quận 1</option>
                <option value="49">Quận 2</option>
                <option value="51">Quận 3</option>
                <option value="52">Quận 4</option>
                <option value="53">Quận 5</option>
                <option value="54">Quận 6</option>
                <option value="55">Quận 7</option>
                <option value="56">Quận 8</option>
                <option value="57">Quận 9</option>
                <option value="58">Quận 10</option>
                <option value="59">Quận 11</option>
                <option value="60">Quận 12</option>
                <option value="61">Quận Bình Thạnh</option>
                <option value="62">Quận Phú Nhuận</option>
                <option value="148">Quận Gò Vấp</option>
                <option value="63">Quận Tân Bình</option>
                <option value="146">Quận Thủ Đức</option>
                <option value="147">Quận Bình Tân</option>
                <option value="149">Quận Tân Phú</option>
                <option value="150">Huyện Bình Chánh</option>
            </select>

            <select name="id_pricerange" id="gia-thuong">
                <option selected="selected" value="">Chọn khoảng giá</option>
                <option value="10">Dưới 10 triệu </option>
                <option value="1">Từ 10 - 15 Triệu</option>
                <option value="5">Từ 15 - 20 Triệu</option>
                <option value="4">Từ 20 - 30 Triệu</option>
                <option value="6">Từ 30 - 40 Triệu</option>
                <option value="11">Từ 40 - 60 Triệu</option>
                <option value="12">Từ 60 - 80 Triệu </option>
                <option value="13">Từ 80 - 100 Triệu</option>
                <option value="14">Trên 100 Triệu</option>
            </select>

            <select style="display: none;" name="id_pricerange_tmp" id="gia-vanphong">
                <option selected="selected" value="">Chọn khoảng giá</option>
                <option value="15">Dưới 10 USD</option>
                <option value="16">Từ 10 - 15 USD</option>
                <option value="17">Từ 15 - 20 USD</option>
                <option value="18">Từ 20 - 25 USD </option>
                <option value="19">Từ 25 - 30 USD </option>
                <option value="20">Trên 30 USD</option>
            </select>

            <select name="id_arearange">
                <option selected="selected" value="">Chọn khoảng diện tích</option>
                <option value="1">Dưới 50 m2</option>
                <option value="8">Từ 50 - 70 m2</option>
                <option value="2">Từ 70 - 100 m2</option>
                <option value="3">Từ 100 - 150 m2</option>
                <option value="4">Từ 150 - 200 m2</option>
                <option value="5">Từ 200 - 300 m2</option>
                <option value="6">Từ 300 - 500 m2</option>
                <option value="7">Trên 500 m2</option>
            </select>

            <input onclick="searchsubmit();" value="" class="btn" type="button">
        </form>
    </div>
</div> 
<div class="theo_phong" style="padding: 10px 10px 10px 10px;">
    <a href="#" 
       onclick="
               window.open(
                       'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href),
                       'facebook-share-dialog',
                       'width=626,height=436');
               return false;">
        <script src="https://apis.google.com/js/plusone.js"></script>
        <g:plus action="share"></g:plus>
        <br/>
        <br/>
        <img width="70" src="/public/images/FBShare.jpg"/> <br/>        
    </a>    
    <br/>
    <a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
    <script>!function(d, s, id) {
               var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
               if (!d.getElementById(id)) {
                   js = d.createElement(s);
                   js.id = id;
                   js.src = p + '://platform.twitter.com/widgets.js';
                   fjs.parentNode.insertBefore(js, fjs);
               }
           }(document, 'script', 'twitter-wjs');</script>
</div>
<!-- .theo_quan -->
<div class="quickcontact">
    <div class="t"></div>

    <div class="m">
        <script type="text/javascript" src="/public/scripts/skypeCheck.js"></script>
        <div class="yahoo"><a href="ymsgr:sendIM?lehoang_27&amp;m=Hi%21%20T%C3%B4i%20l%C3%A0%20kh%C3%A1ch%20t%E1%BB%AB%20www.canhosaigon.com.vn" rel="nofollow"> <strong> <span style="font-size: 14px;"> Mr. Tuấn </span> </strong> <br> </a></div>
        <div class="skype"><a href="skype:lehoang_27?call" rel="nofollow"> <strong> <span style="font-size: 13px;"> Mr Quý </span> </strong> <br> </a></div>
        <div class="hotline"><center><strong><span style="font-size: 11px;"> 0918.847.009 - 0908.550.813</span> <br></strong> <span style="font-size: 10px;"> <strong> <span style="color: #0c972e;"> Mỹ Hưng&nbsp;<strong><span></span></strong></span></strong></span></center><center></center></div>    </div>
</div>
<?php
if($cls == 'home') {
    $this->load->view('layouts/advs_fb');
}else{
    $this->load->view('layouts/cat_district');
}
?>