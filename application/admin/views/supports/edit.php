<div class="row-fluid sortable">
    <?php if (!empty($error)) : ?>
        <div class="span12">
            <div class="alert alert-error">
                <button class="close" data-dismiss="alert" type="button">X</button>
                <?php echo $error['error']?>
            </div>
        </div>
    <?php endif; ?>
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-user"></i> Edit Support</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Fullname</label>
                        <div class="controls">
                            <input type="text" id="staff" name="staff" value="<?php echo $user['staff']?>" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea" >Yahoo</label>
                        <div class="controls">
                            <input type="text" id="yahoo" name="yahoo" value="<?php echo $user['yahoo']?>"/>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Mobile</label>
                        <div class="controls">
                            <input type="text" id="mobile" name="mobile" value="<?php echo $user['mobile']?>"/>
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
                window.location = "/admin/index.php/supports";
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
                staff: {
                    required: true
                },
                yahoo: {
                    required: true
                },
                mobile: {
                    required: true,                    
                }
            }
        });
    });
</script> 
