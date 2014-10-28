<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-list-alt"></i> Chỉnh sửa Advs</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>                   
                    <div class="control-group">
                        <label class="control-label" for="textarea">Loại Advs</label>
                        <div class="controls">
                            <?php echo form_dropdown('cat_id', $cat_id, $adv['cat_id']); ?>                         
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="link">Tên</label>
                        <div class="controls">
                            <?php echo form_input('name',$adv['name']); ?>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="link">Link</label>
                        <div class="controls">
                            <?php echo form_input('link',$adv['link']); ?>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="link">Sort</label>
                        <div class="controls">
                            <?php echo form_input('sort',$adv['sort']); ?>
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
                            <img class="img-logo" src="/public/images/upload/<?php echo $adv['image'] ?>" />
                            <input type="hidden" value="<?php echo $adv['image'] ?>" name="old_image"/>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Active</label>
                        <div class="controls">
                            <?php if($adv['is_active']==1):?>
                            <input id="is_active" type="checkbox" name="is_active" checked="true">
                            <?php else:?>
                            <input id="is_active" type="checkbox" name="is_active">
                            <?php endif ;?>
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
            name: {
                    required: true
                },
                link: {
                    required: true,
                    url:true
                },
                sort: {
                    required: true,
                    number: true
                },
                cat_id: {
                    required: true                    
                },           
        },
        messages: {
            category_name_vi: "Please enter text",
            category_name_en: "Please enter text"            
        }
    });
</script> 
