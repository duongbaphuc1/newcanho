<?php $this->load->view('layouts/breadcrumb');?>

<h1 class="itemtit"><?php echo $real['title'] ?></h1>

<div class="inforbox">
    Mã tin: <?php echo $real['id'] ?>
</div>

<div class="detail_img">

<!-- Maps -->
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true&hl=vi-VN"></script>
<script type="text/javascript" src="/public/scripts/plugins/jquery.ui.map.js"></script>
<!-- Maps -->
<script type="text/javascript" src="/public/scripts/plugins/jquery.ui.map.services.js"></script>
<script type="text/javascript">

    //Gia tri khoi tao ban dau khi hien tra ban do
    var LAT = "10.800195,106.663213";
    var ZOOM = 17;
    var MAP_TYPE = google.maps.MapTypeId.ROADMAP;
    var MAPS_OPTIONS = {
        zoom: ZOOM,
        mapTypeId: MAP_TYPE,
        center: LAT
    };


    $(document).ready(function () {


        address = "<?php echo $real['address_map'] ?>";
        document.getElementById("address").value = address;

        $('#map_canvas').gmap(MAPS_OPTIONS);
        //$(".nav-three").click(function(){

        var geocoderRequest = {
            address: $("#address").val()
        };
        $('#map_canvas').gmap('clear', 'markers');
        $('#map_canvas').gmap('search', geocoderRequest, function (result, status) {
            $('#map_canvas').gmap('addMarker',
                {
                    'position': result[0].geometry.location.lat() + "," + result[0].geometry.location.lng(),
                    'bounds': false
                }, function (map, marker) {
                    map.setCenter(marker.getPosition());
                    map.setZoom(17);
                }).click(function () {
                    $('#map_canvas').gmap('openInfoWindow', {
                        'content': $("#address").val()
                    }, this);
                });

        });

    });


</script>

<script type="text/javascript" src="/public/scripts/lightbox.js"></script>
<link rel="stylesheet" type="text/css" href="/public/styles/lightbox.css" media="screen"/>

<div id="gallery">
    <?php
    $image = proccessimg($real['image']);
    ?>
    <?php foreach($image as $key=>$item):?>
    <a data-lightbox="roadtrip" href="/public/images/upload/<?php echo $item?>"
       title="<?php echo $real['title'];?> !_<?php echo $key+1;?>">
        <img <?php echo ($key != 0) ? 'class="thumb"' : 'class="main_img"' ?> src="/public/images/upload/<?php echo $item?>"
             alt="<?php echo $real['id']?> - <?php echo $real['title'];?> !_<?php echo $key+1;?>"/>
    </a>
    <?php endforeach?>
    <div class="cls">&nbsp;</div>
</div>

<!-- tab content -->
<link rel="stylesheet" type="text/css" href="/public/styles/tab.css"/>
<script type="text/javascript" src="/public/scripts/organictabs.jquery.js"></script>
<script type='text/javascript'>
    $(function () {
        $("#example-two").organicTabs({
            "speed": 200
        });
    });
</script>

<!-- tab content -->


<div id="example-two">
    <ul class="nav">
        <li class="nav-one"><a href="#t1" class="current"><span>Thông tin mô tả</span></a></li>
        <li class="nav-three"><a href="#t3" onclick="mapover()"><span>Bản đồ</span></a></li>
    </ul>
    <div class="list-wrap">
        <div id="t1" style="position: relative;">
            <p><?php echo $real['description'] ?></p>
            <div class="lienhe_vline"><span>LIÊN HỆ NGƯỜI BÁN (CHO THUÊ):</span></div>

            <div class="wrappcontact">
                <script type="text/javascript">
                    function validForm(thisform) {
                        with (thisform) {
                            if (emailValid(email, "Nhập đúng địa chỉ Email!") == false) {
                                email.focus();
                                return false;
                            }
                            if (validRequired(phone, "Vui lòng nhập điện thoại!") == false) {
                                phone.focus();
                                return false;
                            }

                        }
                    }
                </script>
                <form method="post" onsubmit="return validForm(this)">
                    <div class="row">
                        <div class="l">Tên liên hệ</div>
                        <div class="r"><input type="text" class="textbox" name="name"/></div>
                    </div>

                    <div class="row">
                        <div class="l">Email</div>
                        <div class="r"><span>(*)</span><input type="text" class="textbox" name="email" /></div>
                    </div>

                    <div class="row">
                        <div class="l">Điện thoại</div>
                        <div class="r"><span>(*)</span><input type="text" class="textbox" name="phone"/></div>
                    </div>

                    <div class="row">
                        <div class="l">Tiêu đề liên hệ</div>
                        <div class="r"><input type="text" class="textbox" name="title"
                                              value="<?php echo $real['id'] ?> - <?php echo $real['title'] ?>"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="l">Nội dung (ghi chú)</div>
                        <div class="r"><textarea name="content"></textarea></div>
                    </div>

                    <div class="row">
                        <div class="l">&nbsp;</div>
                        <div class="r">
                            <input type="submit" name="submit" value=" Gửi liên hệ " class="btn"/>
                            <input type="reset" name="" value=" Làm lại " class="btn"/>
                        </div>
                    </div>
                </form>
                <div class="cls"></div>
            </div>
        </div>

        <div id="t3" style="position: relative; top: 0px; left: 0px;">
            <input type="hidden" name="address" id="address" style="width:300px"/>

            <div style="position:relative;" id="mapwrap">
                <div id="map_canvas" style="width:678px; height:400px; position:absolute;top:0; left:0;">

                </div>
            </div>

        </div>

    </div>
    <!-- END List Wrap -->
</div>

<div class="cls"></div>
</div>
<script type="text/javascript">
    document.getElementById('map_canvas').style.left = "-1000px";
    function mapover() {
        document.getElementById('mapwrap').style.height = "400px";
        document.getElementById('map_canvas').style.left = "0";
    }
</script>


<div class="listmore">
    <div class="listmorel">

        <div class="listthesame">
            <h2 class="listthesametit">Căn Hộ Cho Thuê cùng loại:</h2>
            <ul>
                <?php foreach($other as $item):?>
                <li>
                    <h3>
                        <a href="<?php echo convertViToEn($item['title'], $item['id']); ?>i.html"
                           title="<?php echo $item['title']?>"><?php echo $item['title']?></a>
                    </h3>
                </li>
                <?php endforeach?>
            </ul>
        </div>
    </div>

    <div class="listmorer">
        <div class="listthesametit"><h2>Xem nhiều nhất</h2></div>
        <div class="listthesame">
            <ul>
                <?php foreach($max as $item):?>
                <li><h3>
                        <a href="<?php echo convertViToEn($item['title'], $item['id']); ?>i.html"
                           title="<?php echo $item['title']?>"><?php echo $item['title']?></a></h3>
                    <span style="color:#CCC;"?>(<?php echo $item['view_count']?> lần xem)</span></li>
                <?php endforeach?>
            </ul>

        </div>
    </div>
    <div class="cls"></div>
</div>