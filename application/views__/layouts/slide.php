<?php
$CI = & get_instance();
$CI->load->model("Advertising_model");
$advs = $CI->Advertising_model->getAll(1);
?>
<!--<div class="slidder">-->
<!--    <div class="slidder_content">-->
<!--        <div class="sadown_left"></div>-->
<!--        <div class="sadown_right"></div>-->
<!--        <div class="box_skitter box_skitter_large">-->
<!--            <ul>-->
<!--                --><?php //foreach ($advs as $key=>$adv): ?><!--      -->
<!--                <li><a href="--><?php //echo $adv['link'] ?><!--"><img src="/public/images/upload/--><?php //echo $adv['image'] ?><!--" class="slide--><?php //echo $key;?><!--" /></a> </li>-->
<!--                --><?php //endforeach;?>
<!--            </ul>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->

<div id="slide">
    <div id="slider" style="overflow: hidden;">
        <ul style="left: -130px; width: 2796px;">
            <li><a href="" title=""><img src="images/phong-ngu.jpg" class="news_img"></a>

                <div class="news_des">
                    <a href="" title="">Cho thuê căn hộ City Garden 117m2 ...</a>

                    <p>City Garden - căn hộ cho thuê quận Bình Thạnh như một thành phố thu nhỏ nhờ có sẵn
                        những dịch vụ tiện ích phục vụ cho cuộc sống hằng ngày Đáp ứng nhu cầu nghỉ ngơi,
                        sinh hoạt an ninh, yên tĩnh nhờ cổng biệt lập,&nbsp;Căn hộ&nbsp;City Garden&nbsp;thiết
                        kế khu phức hợp với những tiện nghi sinh hoạt 5 sao như: vườn cây, sân chơi, siêu
                        thị mini, nhà hang, café, nhà trẻ, trung tâm y tế, spa, CLB thể hình, hồ bơi…. Cho
                        thuê căn hộ City Garden&nbsp;Cosmopolitan tháp 2A, diện tích 117m2, trong đó có 2
                        phòng ngủ, 2 phòng tắm, 1 phòng khách và nhà bếp có sẵn tiện nghi Giá cho thuê: 1300
                        usd/thHotline: 0918 847 009</p>
                </div>
            </li>
            <li><a href=""><img src="images/69623835991_sai-gon-pearl.jpg" class="news_img"></a>

                <div class="news_des">
                    <a href="">Cho thuê căn hộ Saigon Pearl tầng ...</a>

                    <p>Cho thuê căn hộ tầng 18, diện tích 140m2, 3 phòng ngủ tại Saigon Pearl, căn hộ cho
                        thuê quận Bình Thạnh Căn hộ tầng 18, diện tích 140m2 cho thuê tại Saigon Pearl, căn
                        hộ có 3 phòng ngủ, 1 phòng khách, 3 phòng tắm và nhà bếp với đủ tiện nghi cao cấp,
                        hiện đại Giá cho thuê: 2300 usd/th Gần&nbsp;Căn hộ&nbsp;cho thuê Saigon Pearl, bạn
                        sẽ thấy hàng trăm biệt thự sang trọng nằm bên bờ sông Sài Gòn lãng mạn, cách đó
                        không xa là toà nhà căn hộ, văn phòng&nbsp;The Manor&nbsp;-&nbsp;Địa chỉ: 91 Nguyễn
                        Hữu Cảnh, Phường 22, Quận Bình Thạnh Chi tiết liên hệ: 0918 847 009</p>
                </div>
            </li>
            <li><a href=""><img src="images/69623835991_sai-gon-pearl.jpg" class="news_img"></a>

                <div class="news_des">
                    <a href="">The Manor cho thuê căn hộ Block D 2 ...</a>

                    <p>Căn hộ cho thuê quận Bình Thạnh - The Manor Officetel &nbsp;ra đời để đáp ứng nhu cầu
                        sống cho bạn và những người bạn thương yêu!&nbsp; Cho thuê căn hộ The Manor lầu 3,
                        block D, diện tích 80m2, 2 phòng ngủ, 2 phòng tắm, 1 phòng khách và nhà bếp, đủ tiện
                        nghi, nội thất cao cấp Giá cho thuê: 1200 usd/th Một số dịch vụ sẵn có khi thuê&nbsp;căn
                        hộ The Manor:&nbsp; * Hồ bơi * Phòng Gym * Trung tâm y tế * Cáp TV * Internet ADSL *
                        An ninh 24/24 * Dịch vụ lễ tân.... Chi tiết liên hệ: 0918 847 009</p>
                </div>
            </li>
            <li>
                <a href="http://canhosaigon.com.vn/sunrise-city-cho-thue-can-ho-2-phong-ngu-gia-1200-usd-th-775i.html"
                   title="Sunrise City cho thuê căn hộ 2 phòng ngủ giá 1200 usd/th">
                    <img src="images/69623835991_sai-gon-pearl.jpg"
                         alt="Sunrise City cho thuê căn hộ 2 phòng ngủ giá 1200 usd/th"
                         class="news_img"></a>

                <div class="news_des">
                    <a href="http://canhosaigon.com.vn/sunrise-city-cho-thue-can-ho-2-phong-ngu-gia-1200-usd-th-775i.html"
                       title="Sunrise City cho thuê căn hộ 2 phòng ngủ giá 1200 usd/th">
                        Sunrise City cho thuê căn hộ 2 ...</a>

                    <p>Căn hộ cho thuê quận 7&nbsp;- Sunrise City -
                        nơi bạn có thể hòa mình cùng thiên nhiên để tận hưởng cuộc sống.
                        Cho thuê Căn hộ Sunrise&nbsp;City có diện tích 102m2 - 2 phòng ngủ - 2
                        phòng tắm - 1 phòng khách - bếp, đủ tiện nghi, nội thất cao cấp
                        Giá cho thuê: 1200 usd/th
                        Tiện ích khi thuê căn hộ tại Sunrise City:
                        * Siêu thị
                        * Hồ bơi
                        * Sân chơi trẻ em
                        * Khu thể thao
                        * Phòng gym
                        * Trung tâm y tế..........
                        Chi tiết liên hệ: 0918 847 009</p>
                </div>
            </li>
        </ul>
    </div>
    <ul class="pagination" id="pagination">
        <li onclick="slideshow.pos(0)" class="current"></li>
        <li onclick="slideshow.pos(1)"></li>
        <li onclick="slideshow.pos(2)" class=""></li>
        <li onclick="slideshow.pos(3)" class=""></li>
    </ul>
    <div class="cls"></div>
    <script type="text/javascript">

        var slideshow = new TINY1.slider.slide('slideshow', {
            id: 'slider',
            auto: 3,
            resume: true,
            vertical: false,
            navid: 'pagination',
            activeclass: 'current',
            position: 0
        });
    </script>
</div>