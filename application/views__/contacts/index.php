<?php $contact = $this->session->userdata('contact'); ?>
<?php $this->load->view('layouts/breadcrumb');?>
<div class="wrappcontact">
    <form method="post" action="" onsubmit="return validForm(this)">
       <h3 style="color:red"><?php echo (!empty($msg)) ? $msg : "" ?></h3>
        <div class="row">
            <div class="l">Thông tin liên hệ</div>
            <div class="r">
                <div><b>Công ty TNHH MTV địa ốc Mỹ Hưng</b></div>
                <div><b>Địa chỉ</b>: 189 Hai Bà Trưng - Phường 6 - Quận 3 - TP Hồ Chí Minh</div>
                <div><b>Email</b>: <a href="mailto:diaocmyhung@gmail.com">diaocmyhung@gmail.com</a></div>
                <div><b>Điện thoại</b>: 0908.550.813</div>
            </div>
        </div>
        <div class="row">
            <div class="l">Tên liên hệ</div>
            <div class="r"><input type="text" value="<?php echo (!empty($lienhe['name'])) ? $lienhe['name'] : "" ?>" name="name" class="textbox"></div>
        </div>
        <div class="row">
            <div class="l">Điện thoại</div>
            <div class="r"><span>(*)</span><input value="<?php echo (!empty($lienhe['phone'])) ? $lienhe['phone'] : "" ?>"  type="text" name="phone" class="textbox"></div>
        </div>
        <div class="row">
            <div class="l">Email</div>
            <div class="r"><span>(*)</span><input value="<?php echo (!empty($lienhe['email'])) ? $lienhe['email'] : "" ?>"  type="text" name="email" class="textbox"></div>
        </div>
        <div class="row">
            <div class="l">Tiêu đề liên hệ</div>
            <div class="r"><input value="<?php echo (!empty($lienhe['title'])) ? $lienhe['title'] : "" ?>"  type="text" name="title" class="textbox"></div>
        </div>
        <div class="row">
            <div class="l">Nội dung</div>
            <div class="r"><textarea name="content" class="textarea"><?php echo (!empty($lienhe['content'])) ? $lienhe['content'] : "" ?></textarea></div>
        </div>
        <div class="row">
            <div class="l">Captcha</div>
            <div class="r"><?php echo $captcha['image']; ?></div>
        </div> 
        <div class="row">
            <div class="l">Xác nhận Captcha</div>
            <div class="r"><input size="40" type="text" name="confirmCaptcha" id="confirmCaptcha" value="" /></div>
        </div>
        
        <div class="row">
            <div class="l">&nbsp;</div>
            <div class="r"><input value=" Gửi liên hệ " type="submit" name="submit" class="btn"> <input type="reset" value=" Làm lại " class="btn"></div>
        </div>
    </form>

</div>
<script type="text/javascript">
    function validForm(thisform)
    {
        with (thisform)
        {
            if (validRequired(phone,"Vui lòng nhập điện thoại!") == false)
            {	phone.focus();	return false;	}
            if (emailValid(email,"Nhập đúng địa chỉ Email!") == false)
            {	email.focus();	return false;	}
            if($("#confirmCaptcha").val() == ""){ alert("Vui lòng nhập xác nhận Captcha"); return false; }
        }
    }

    function validRequired(field,alerttxt)
    {
        with (field)
        {
            if (value==null||value=="")
            {	alert(alerttxt);
                return false;
            }
            else
            {	return true;	}
        }
    }

    function emailValid(mailField,txtalert){
        if (document.layers||document.getElementById||document.all)
        {
            var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

            with (mailField)
            {
                if (filter.test(value)){
                    return true;
                }else{
                    alert(txtalert);
                    return false;
                }
            }
        }
        else
            return true;
    }
</script>