<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-edit"></i> Thêm dự án</h2>
        </div>
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tên dự án</label>
                        <div class="controls">
                            <?php echo form_input('project_name', ''); ?>    
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Loại dự án</label>
                        <div class="controls">
                            <?php echo form_dropdown('catproject_id', $cat_project, null); ?>                         
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Quận</label>
                        <div class="controls">
                            <?php echo form_dropdown('district_id', $district, null); ?>                         
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tiêu đề dự án</label>
                        <div class="controls">
                            <?php echo form_input('project_title', ''); ?>    
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Mô tả dự án</label>
                        <div class="controls">
                            <textarea name="project_desc"></textarea>                        
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Keyword dự án</label>
                        <div class="controls">
                            <textarea name="project_keyword"></textarea>                        
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
                project_name: {
                    required: true
                },
                catproject_id: {
                    required: true
                },
                project_title: {
                    required: true
                },
                project_desc: {
                    required: true
                },
                project_keyword: {
                    required: true
                },                
                description: {
                    required: true
                }
            },
            messages: {               
            }
        });
    });
</script> 
