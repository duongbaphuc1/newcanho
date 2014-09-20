<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-font"></i> Edit Product</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tiêu đề</label>
                        <div class="controls">
                            <?php echo form_input('title', $news['title']); ?>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="image">Hình</label>
                        <div class="controls">
                            <input type="file" id="image" name="image" />
                            <div class="note-upload">
                                Extentions : png, gif, jpg and < <?php echo $this->config->item("max_size"); ?> kb
                            </div>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Hình</label>
                        <div class="controls">
                            <img class="img-logo" src="/public/images/upload/<?php echo $news['image'] ?>" />
                            <input type="hidden" value="<?php echo $news['image'] ?>" name="old_image"/>
                        </div>
                    </div>                    
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tóm tắt</label>
                        <div class="controls">
                            <?php echo form_input('summary', $news['summary']); ?>                            
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="description">Nội dung</label>
                        <div class="controls">
                            <textarea name="description"><?php echo $news['description'] ?></textarea>
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
                window.location = "/admin/index.php/news";
            } else {
                history.go(-1);
            }
        });
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
</script> 
