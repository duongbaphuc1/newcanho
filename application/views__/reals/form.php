<div class="title_ge red f_utm"><span>KÝ GỬI NHÀ ĐẤT</span></div>
<div>
    <?php if($success):?>
    <p>Ký gửi thành công, cám ơn quí khách!</p>
    <?php endif;?>
    <p class="note">KÝ GỬI NHÀ ĐẤT Vui lòng điền đầy đủ thông tin vào form ký gửi bên dưới </p>
    <form id="frm-kygui" method="post" action="/index.php/dang-ky-gui">
        <div class="form_contact mt_20px">
            <div class="field clearfix">
                <label><strong> Họ tên:</strong> <span>(*)</span></label>
                <input name="fullname" type="text">
            </div>
            <div class="field clearfix">
                <label> <strong>Địa chỉ email:</strong> <span>(*)</span></label>
                <input type="text" name="email">
            </div>

            <div class="field clearfix">
                <label> <strong>Địa chỉ liên hệ:</strong> <span>(*)</span></label>
                <input type="text" name="address">
            </div>

            <div class="field clearfix">
                <label><strong>Tiêu đề:</strong> </label>
                <input type="text" name="title">
            </div>
            <div class="field clearfix">
                <label><strong> Giá:</strong> <span>(*)</span></label>
                <input type="text" name="price">
            </div>   
            <br/>
            <div class="field clearfix">
                <label><strong> Quận:</strong> <span>(*)</span></label>
                <?php echo form_dropdown('district', $district, null); ?>
            </div>
            <br/>
            <div class="field clearfix">
                <label><strong> Hình:</strong> <span>(*)</span></label>
                <input type="file" name="image" >
            </div>               
            <div class="field clearfix">
                <label><strong> Thông tin thêm: </strong><span>(*)</span></label>
                <textarea name="description" cols="1" rows="1"></textarea>
            </div>
            <div class="submit_send clearfix">
                <input type="submit" value="Gửi đi" class="btn_sub">
                <input type="reset" id="reset_data" value="Nhập lại" class="btn_sub">
            </div>
        </div>
    </form>
</div>
<script>
    $("#reset_data").click(function(){
        $("#frm-kygui").reset();
    });
</script>