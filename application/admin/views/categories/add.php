<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-edit"></i> Thêm địa ốc</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tên địa ốc</label>
                        <div class="controls">
                            <?php echo form_input('category_name',''); ?>    
                        </div>
                    </div> 
                    <div class="control-group">
                        <label class="control-label" for="textarea">Loại địa ốc</label>
                        <div class="controls">
                            <?php
                            if (!empty($listCatsType)) {
                                echo form_dropdown('type', $listCatsType, '');
                            }
                            ?>    
                        </div>
                    </div>
                                        
                </fieldset>                    
                <div class="form-actions">                                
                    <button class="btn btn-primary" type="submit">Save Changes</button>                    
                    <button class="btn cancel" type="button">Cancel</button>
                </div>
            </form>
        </div>
    </div><!--/span-->
</div><!--/row-->

<script>
    $(document).ready(function() {
        $(".btn.cancel").click(function() {
            if (history.length == 0) {
                window.location = "/admin/index.php/categories";
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
                category_name: {
                    required: true
                },
                type: {
                    required: true
                },
                
            },
            messages: {               
            }
        });
    });
</script> 
