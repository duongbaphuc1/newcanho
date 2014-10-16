<?php $contact = $this->session->userdata('contact'); ?>
<?php $this->load->view('layouts/breadcrumb');?>
<div class="wrappcontact">
    <form method="post" action="" onsubmit="return validForm(this)">
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
            <div class="r"><input type="text" name="name" class="textbox"></div>
        </div>
        <div class="row">
            <div class="l">Điện thoại</div>
            <div class="r"><span>(*)</span><input type="text" name="phone" class="textbox"></div>
        </div>
        <div class="row">
            <div class="l">Email</div>
            <div class="r"><span>(*)</span><input type="text" name="mail" class="textbox"></div>
        </div>
        <div class="row">
            <div class="l">Tiêu đề liên hệ</div>
            <div class="r"><input value="" type="text" name="subject" class="textbox"></div>
        </div>
        <div class="row">
            <div class="l">Nội dung</div>
            <div class="r"><textarea name="message" class="textarea"></textarea></div>
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
            if (emailValid(mail,"Nhập đúng địa chỉ Email!") == false)
            {	mail.focus();	return false;	}
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