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
                        <label class="control-label" for="textarea">Tên Tag</label>
                        <div class="controls">
                            <?php echo form_input('tag_name', $tags['tag_name']); ?>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Loại Tag</label>
                        <div class="controls">
                            <?php
                            if (!empty($cattag_id)) {
                                echo form_dropdown('cattag_id', $cattag_id, $tags['cattag_id']);
                            }
                            ?>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Sort Tag</label>
                        <div class="controls">
                            <?php echo form_input('sort', $tags['sort']); ?>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tiêu đề Tag</label>
                        <div class="controls">
                            <?php echo form_input('tag_title', $tags['tag_title']); ?>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Mô tả Tag</label>
                        <div class="controls">
                            <textarea name="tag_desc"><?php echo $tags['tag_desc']; ?></textarea>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Keyword Tag</label>
                        <div class="controls">
                            <textarea name="tag_keyword"><?php echo $tags['tag_keyword']; ?></textarea>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Active</label>
                        <div class="controls">
                            <?php if($tags['is_active']==1):?>
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
                tag_name: {
                    required: true
                },
                cattag_id: {
                    required: true
                },
                tag_title: {
                    required: true
                },
                tag_desc: {
                    required: true
                },
                tag_keyword: {
                    required: true
                },
                sort: {
                    required: true,
                    number: true,
                },
            },
            messages: {
                
            }
        });
    });
</script> 
