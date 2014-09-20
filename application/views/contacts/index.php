<?php $contact = $this->session->userdata('contact'); ?>

<div class="left_main">
    <div class="title_ge font_my">LIÊN HỆ</div>
    <div class="content_ge">
        <div>
        <?php echo $contact['contact_vi'] ?>    
        </div>

        <p class="mt_15px"> Bạn muốn liên hệ với chúng tôi? Vui lòng gởi mail sử dụng mẫu chúng tôi cung cấp. Chúng tôi có thể không hồi âm hết những thông tin của các bạn. Nhưng chúng tôi sẽ đọc hết các thông tin liên hệ của các bạn. </p>
        <div class="clearfix mt_15px">
            <div class="for_row clearfix">
                <div class="lb fl">Họ tên:</div>
                <input type="text" class="txt_2" />

            </div>
            <div class="for_row clearfix">
                <div class="lb fl">Địa chỉ:</div>
                <input type="text" class="txt_2" />

            </div>

            <div class="for_row clearfix">
                <div class="lb fl">Điện thoại:</div>
                <input type="text" class="txt_1" />

            </div><div class="for_row clearfix">
                <div class="lb fl">Email:</div>
                <input type="text" class="txt_1" />

            </div>
            <div class="for_row clearfix">
                <div class="lb fl">Tiêu đề:</div>
                <input type="text" class="txt_2" />

            </div>

            <div class="for_row clearfix">
                <div class="lb fl">Nội dung:</div>
                <textarea class="text-are"></textarea>

            </div>
            <div class="for_row" style="margin-left:100px;">
                <input type="button" class="btn_lh fl" value="Gửi đi" /> <input type="button" class="btn_lh fl" value="Nhập lại" style="margin-left:10px;" />
            </div>
        </div>
    </div>  
</div>