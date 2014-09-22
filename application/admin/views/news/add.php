<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-edit"></i> Thêm tin tức</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tiêu đề</label>
                        <div class="controls">
                            <?php echo form_input('title', ''); ?>    
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="image">Hình</label>
                        <div class="controls">
                            <input type="file" id="product_image" name="image" />                            
                            <div class="note-upload">
                                Extentions : png, gif, jpg and < <?php echo $this->config->item("max_size"); ?> kb
                            </div>
                        </div>                        
                    </div>                                        
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tóm tắt</label>
                        <div class="controls">
                            <textarea name="summary"></textarea>                        
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Nội dung</label>
                        <div class="controls">
                            <textarea name="description"></textarea>
                        </div>
                    </div>                    
                </fieldset>                    
                <div class="form-actions">
                    <input type="hidden" name="section" value="text"/>             
                    <button class="btn btn-primary" type="submit">Save Changes</button>                    
                    <button class="btn cancel" type="button">Cancel</button>
                </div>
            </form>
        </div>
    </div><!--/span-->
</div><!--/row-->

<script>
    $(document).ready(function() {
        var ck = CKEDITOR.replace('description', {toolbar: 'Full', width: "100%"});
        CKFinder.setupCKEditor(ck, {
            basePath: '/public/admin/ckfinder/'
        });        
        $(".btn.cancel").click(function() {
            if (history.length == 0) {
                window.location = "/admin/index.php/products";
            } else {
                history.go(-1);
            }
        });

        $(".form-horizontal").bind('submit', function() {
            for (instance in CKEDITOR.instances)
            CKEDITOR.instances[instance].updateElement();
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
                title: {
                    required: true
                },
                summary: {
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
