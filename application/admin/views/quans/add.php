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
                        <label class="control-label" for="textarea">Tỉnh/TP</label>
                        <div class="controls">
                            <?php echo form_dropdown('province_id', $province, null); ?>                         
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Quận</label>
                        <div class="controls">
                            <?php echo form_input('district_name', ''); ?>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Sort</label>
                        <div class="controls">
                            <?php echo form_input('sort', ''); ?>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Active</label>
                        <div class="controls">                            
                            <input id="is_active" type="checkbox" name="is_active" checked="true">
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
                window.location = "/admin/index.php/projects";
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
                province_id: {
                    required: true
                },
                district_name: {
                    required: true
                },
                sort: {
                    required: true,
                    number: true
                },
                
            },
            messages: {               
            }
        });
    });
</script>  
