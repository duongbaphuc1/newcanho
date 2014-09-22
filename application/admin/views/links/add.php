<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-list-alt"></i> Thêm</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Nhãn</label>
                        <div class="controls">
                            <input type="text" id="label" name="label" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Link</label>
                        <div class="controls">
                            <input type="text" id="link" name="link" />
                        </div>
                    </div>                                                            
                </fieldset>                    
                <div class="form-actions">                    
                    <button class="btn btn-primary" type="submit">Lưu</button>                    
                    <button class="btn cancel" type="button">Hủy</button>
                </div>
            </form>
        </div>
    </div><!--/span-->
</div><!--/row-->

<script>
    $(document).ready(function() {
        $(".btn.cancel").click(function() {
            if (history.length == 0) {
                window.location = "/admin/index.php/customers";
            } else {
                history.go(-1);
            }
        });
        $(".form-horizontal").validate({
            ignore: "",
            errorElement: "span",
            errorClass: "help-inline",
            errorPlacement: function(error, element) {
                error.appendTo(element.parent());
            },
            highlight: function(element) {
                $(element).parent().parent().addClass('error');
            },
            unhighlight: function(element) {
                $(element).parent().parent().removeClass('error');

            },
            rules: {
                category_name_en: {
                    required: true
                },
                category_name_vi: {
                    required: true
                }
            },
            messages: {
                category_name_en: "Please enter text",
                category_name_vi: "Please enter text"
            }
        });
    });
</script> 
