<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Cho thuê: Văn Phòng, Cao ốc, Căn Hộ, Biệt Thự, Villa, Nhà, giá rẻ bất ngờ.</title>

    <link rel="stylesheet" type="text/css" href="/public/styles/style.css">

    <!-- slide -->
    <script type="text/javascript" src="/public/js/script.js"></script>
    <script type="text/javascript" src="/public/js/jquery_002.js"></script>
    <!-- slide -->
    <script type="text/javascript" src="/public/js/tinydropdown.js"></script>
    <!-- jQuery Lazy Load -->
    <!--<script language="javascript" src="js/jquery.js"></script>-->
    <script type="text/javascript" src="/public/js/jquery.js"></script>
    <!-- Lazy load -->
    <script type="text/javascript" charset="utf-8">
        $(function () {
            $(".left img")
                .lazyload({
                    placeholder: "images/preload-img.gif",
                    effect: "fadeIn"
                });
        });
    </script>
    <!--Start of Zopim Live Chat Script-->
    <script type="text/javascript">
        window.$zopim || (function (d, s) {
            var z = $zopim = function (c) {
                z._.push(c)
            }, $ = z.s =
                d.createElement(s), e = d.getElementsByTagName(s)[0];
            z.set = function (o) {
                z.set.
                    _.push(o)
            };
            z._ = [];
            z.set._ = [];
            $.async = !0;
            $.setAttribute('charset', 'utf-8');
            $.src = '//v2.zopim.com/?1y1DQU4Qk3b8xLOa52iEWT2voJW2GHks';
            z.t = +new Date;
            $.
                type = 'text/javascript';
            e.parentNode.insertBefore($, e)
        })(document, 'script');
    </script>
    <!--End of Zopim Live Chat Script-->

    <!-- Navigation -->
    <script src="/public/js/jquery.min.js" type="text/javascript"></script>
    <script>
        $(function () {
            var pull = $('#pull');
            menu = $('nav ul');
            menuHeight = menu.height();

            $(pull).on('click', function (e) {
                e.preventDefault();
                menu.slideToggle();
            });

            $(window).resize(function () {
                var w = $(window).width();
                if (w > 320 & menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
        });
    </script>
</head>

<body data-twttr-rendered="true">

<div class="wrap">
    <?php $this->load->view("layouts/banner");?>
    <!-- End banner -->
    <?php $this->load->view("layouts/menu");?>
    <!-- End menu -->

    <div class="body">
        <div class="left">
            <?php $this->load->view("layouts/slide");?>
            <!-- #slide -->

            <!-- bgs_moi_nhat_cont -->

        </div>
        <!-- .left -->

        <div class="right">

            <div class="searchbox">
                <div class="t"></div>

                <div class="m">
                    <form action="http://canhosaigon.com.vn/tim-kiem/" name="search" method="post">

                        <input name="code" id="code" placeholder="Tìm mã tin" style="color:#666;font-style:italic;"
                               onfocus="if (this.value == 'Tìm mã tin') {
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
                            <option value="91">Cho Thuê Nhà</option>
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
                            <option value="10">Dưới 10 triệu</option>
                            <option value="1">Từ 10 - 15 Triệu</option>
                            <option value="5">Từ 15 - 20 Triệu</option>
                            <option value="4">Từ 20 - 30 Triệu</option>
                            <option value="6">Từ 30 - 40 Triệu</option>
                            <option value="11">Từ 40 - 60 Triệu</option>
                            <option value="12">Từ 60 - 80 Triệu</option>
                            <option value="13">Từ 80 - 100 Triệu</option>
                            <option value="14">Trên 100 Triệu</option>
                        </select>

                        <select style="display: none;" name="id_pricerange_tmp" id="gia-vanphong">
                            <option selected="selected" value="">Chọn khoảng giá</option>
                            <option value="15">Dưới 10 USD</option>
                            <option value="16">Từ 10 - 15 USD</option>
                            <option value="17">Từ 15 - 20 USD</option>
                            <option value="18">Từ 20 - 25 USD</option>
                            <option value="19">Từ 25 - 30 USD</option>
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
            <div class="theo_phong">
                <a href="#" class="block_frame">
                    </script>
                    <
                    div
                    id = "___plus_0"
                    style = "text-indent: 0px; margin: 0px; padding: 0px; background: none repeat scroll 0% 0% transparent; border-style: none; float: none; line-height: normal; font-size: 1px; vertical-align: baseline; display: inline-block; width: 450px; height: 20px;" > < iframe
                    title = "+Chia sẻ"
                    data - gapiattached = "true"
                    src = "images/sharebutton.htm"
                    name = "I0_1410879808692"
                    id = "I0_1410879808692"
                    vspace = "0"
                    tabindex = "0"
                    style = "position: static; top: 0px; width: 450px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 20px;"
                    scrolling = "no"
                    marginwidth = "0"
                    marginheight = "0"
                    hspace = "0"
                    width = "100%"
                    frameborder = "0" > < /iframe></
                    div >
                    < br >
                    < br >
                    < img
                    src = "images/FBShare.jpg"
                    width = "70" > < br >
                        < / a >
                        < br >
                        < iframe
                    style = "width: 109px; height: 20px;"
                    data - twttr - rendered = "true"
                    title = "Twitter Tweet Button"
                    class
                    = "twitter-share-button twitter-tweet-button twitter-share-button twitter-count-horizontal"
                    src = "images/tweet_button.htm"
                    allowtransparency = "true"
                    scrolling = "no"
                    id = "twitter-widget-0"
                    frameborder = "0" > < / iframe >

                        < / div >
                            <!-- .theo_quan -->
                        < div
                    class
                    = "quickcontact" >
                        < div
                    class
                    = "t" > < / div >

                        < div
                    class
                    = "m" >
                    </script>
                    <div class="yahoo"><a
                            href="ymsgr:sendIM?lehoang_27&amp;m=Hi%21%20T%C3%B4i%20l%C3%A0%20kh%C3%A1ch%20t%E1%BB%AB%20www.canhosaigon.com.vn"
                            rel="nofollow"> <strong> <span style="font-size: 14px;"> Mr. Tuấn </span> </strong> <br>
                        </a></div>
                    <div class="skype"><a href="skype:lehoang_27?call" rel="nofollow"> <strong> <span
                                    style="font-size: 13px;"> Mr Quý </span> </strong> <br> </a></div>
                    <div class="hotline">
                        <center><strong><span style="font-size: 11px;"> 0918.847.009 - 0908.550.813</span> <br></strong>
                            <span style="font-size: 10px;"> <strong> <span
                                        style="color: #0c972e;"> Mỹ Hưng&nbsp;<strong><span></span></strong></span></strong></span>
                        </center>
                        <center></center>
                    </div></div>
        </div>
        <div class="partner">
            <div class="t"></div>

            <div class="m">
                <a href="http://apartmentforlease.com.vn/" target="_blank" title="Apartment for rent">
                    <img src="images/logo.jpg" alt="Apartment for rent">
                </a>
                <a href="http://muabanthue.vn/" target="_blank" title="Mua bán cho thuê nhà đất">
                    <img src="images/logo.png" alt="Mua bán cho thuê nhà đất">
                </a>
            </div>


        </div>

        <div class="partner">
            <div class="th"></div>
            <div class="m">
                <center>
                    <div class=" fb_reset" id="fb-root">
                        <div style="position: absolute; top: -10000px; height: 0px; width: 0px;">
                            <div></div>
                        </div>
                        <div style="position: absolute; top: -10000px; height: 0px; width: 0px;">
                            <div></div>
                        </div>
                    </div>

                    <div
                        fb-iframe-plugin-query="app_id=&amp;font=arial&amp;href=http%3A%2F%2Fwww.facebook.com%2Fcanhosaigonquan1&amp;locale=vi_VN&amp;sdk=joey&amp;send=false&amp;show_faces=true&amp;width=220"
                        fb-xfbml-state="rendered" class="fb-like fb_iframe_widget"
                        data-href="http://www.facebook.com/canhosaigonquan1" data-send="false" data-width="220"
                        data-show-faces="true" data-font="arial"><span
                            style="vertical-align: bottom; width: 225px; height: 47px;"><iframe class=""
                                                                                                src="images/like.htm"
                                                                                                style="border: medium none; visibility: visible; width: 225px; height: 47px;"
                                                                                                title="fb:like Facebook Social Plugin"
                                                                                                scrolling="no"
                                                                                                allowtransparency="true"
                                                                                                name="f20fb54d2c2c8e2"
                                                                                                height="1000px"
                                                                                                width="220px"
                                                                                                frameborder="0"></iframe></span>
                    </div>
                </center>

            </div>


        </div>


    </div>
    <!-- .right -->

    <div class="cls">&nbsp;</div>

    <div class="bottommenu">
        <div class="float_right"></div>
        <div>
            <center>
                <span class="smalltext"><a rel="nofollow" title="Văn phòng cho thuê" href="index.html">Trang
                        chủ</a> | <a rel="nofollow" href="canhochothue.html" title="Căn hộ cho thuê">Căn hộ cho thuê</a> | <a
                        rel="nofollow" href="canhodichvu.html" title="Căn hộ dịch vụ">Căn hộ dịch vụ</a> | <a
                        rel="nofollow" title="Văn phòng cho thuê" href="vanphongchothue.html">Văn phòng cho
                        thuê</a> | <a rel="nofollow" title="Villa cho thuê" href="villachothue.html">Villa cho thuê</a> | <a
                        rel="nofollow" href="chothuenha.html" title="Nhà cho thuê">Nhà cho thuê</a> </span>
            </center>
        </div>
    </div>

    <div class="tagscloud">
        <ul>
            <li>
                <a href="http://canhosaigon.com.vn/van-phong-cho-thue/" title="Văn phòng cho thuê">Văn phòng cho thuê
                    | </a>
            </li>
            <li>
                <a href="http://canhosaigon.com.vn/van-phong-cho-thue/quan-1/" title="Văn phòng cho thuê quận 1"><b>Văn
                        phòng cho thuê quận 1 | </b></a>
            </li>
            <li>
                <a href="http://canhosaigon.com.vn/van-phong-cho-thue/quan-3/" title="Văn phòng cho thuê quận 3"><b>Văn
                        phòng cho thuê quận 3 | </b></a>
            </li>
            <li>
                <a href="http://canhosaigon.com.vn/van-phong-cho-thue/quan-5/" title="Văn phòng cho thuê quận 5">Văn
                    phòng cho thuê quận 5 | </a>
            </li>
            <li>
                <a href="http://canhosaigon.com.vn/van-phong-cho-thue/quan-10/" title="Văn phòng cho thuê quận 10">Văn
                    phòng cho thuê quận 10 | </a>
            </li>
            <li>
                <a href="http://canhosaigon.com.vn/van-phong-cho-thue/quan-binh-thanh/"
                   title="Văn phòng cho thuê quận bình thạnh">Văn phòng cho thuê quận bình thạnh | </a>
            </li>
            <li>
                <a href="http://canhosaigon.com.vn/van-phong-cho-thue/quan-phu-nhuan/"
                   title="Văn phòng cho thuê quận phú nhuận">Văn phòng cho thuê quận phú nhuận | </a>
            </li>
            <li>
                <a href="http://canhosaigon.com.vn/van-phong-cho-thue/quan-tan-binh/"
                   title="Văn phòng cho thuê quận tân bình">Văn phòng cho thuê quận tân bình</a>
            </li>
        </ul>
        <!-- seo -->
        <strong><a title="cho thuê căn hộ sài gòn pearl" href="http://canhosaigon.com.vn/cho-thue-can-ho-saigon-pearl/">cho
                thuê căn hộ sài gòn pearl</a></strong>

        <strong><a title="cho thuê căn hộ estella" href="http://canhosaigon.com.vn/cho-thue-can-ho-the-estella/">cho
                thuê căn hộ estella</a></strong>

        <strong><a title="cho thuê căn hộ the vista" href="http://canhosaigon.com.vn/cho-thue-can-ho-the-vista/">cho
                thuê căn hộ the vista</a></strong>

        <strong><a title="căn hộ cho thuê quận phú nhuận"
                   href="http://canhosaigon.com.vn/can-ho-cho-thue/quan-phu-nhuan/">căn hộ cho thuê quận phú
                nhuận</a></strong>

        <strong><a title="căn hộ cho thuê quận bình thạnh"
                   href="http://canhosaigon.com.vn/can-ho-cho-thue/quan-binh-thanh/">căn hộ cho thuê quận bình thạnh</a></strong>
        <!-- -->


    </div>
    <!-- .tagscloud -->

    <div class="copyright">

        <p>Copyright © 2012 <strong><a href="http://canhosaigon.com.vn/van-phong-cho-thue/quan-1/"
                                       title="Văn Phòng Cho Thuê Quận 1 - Văn phòng cho thuê quận 3 - Văn phòng cho thuê quận tân bình">Địa
                    Ốc Mỹ Hưng</a></strong>

            <a href="" rel="author" title="Trang G+ của BĐS Mỹ Hưng">
                <img src="images/gprofile_button-16.png" alt="" height="16" width="16"> </a>
            <a href="" title="Trang TWITTER của BĐS Mỹ Hưng">
                <img src="images/twitter.jpg" alt="" height="16" width="16"> </a>

            <iframe title="+1" data-gapiattached="true" src="images/fastbutton.htm" name="I1_1410879808697"
                    id="I1_1410879808697" vspace="0" tabindex="0"
                    style="position: static; top: 0px; width: 90px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 20px;"
                    scrolling="no" marginwidth="0" marginheight="0" hspace="0" width="100%" frameborder="0"></iframe>
            <a href="http://mrphuc.blogspot.com/p/phuc.html" target="_blank">Designed by Mr Phuc</a>
        </p>

    </div>
    <!-- .copyright -->
    <div class="cls"></div>
</div>
<!-- .body -->
<div class="cls"></div>
</div>
<!-- .wrap -->
</body>
</html>