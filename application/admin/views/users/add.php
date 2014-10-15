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
            <h2><i class="icon-user"></i> Add Users</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Fullname</label>
                        <div class="controls">
                            <input type="text" value="<?php echo (!empty($info['full_name']))?$info['full_name']:""?>" id="full_name" name="full_name" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Email</label>
                        <div class="controls">
                            <input type="text" id="email" name="email" value="<?php echo (!empty($info['email']))?$info['email']:""?>"/>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Username</label>
                        <div class="controls">
                            <input type="text" id="username"  name="username" value="<?php echo (!empty($info['username']))?$info['username']:""?>"/>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Password</label>
                        <div class="controls">
                            <input type="text" value="<?php echo (!empty($info['password']))?$info['password']:""?>" id="password" name="password" />
                        </div>
                    </div>
                    <div class="control-group">                       
                        <div class="controls">
                            <?php                              
                                echo form_radio('role', 'admin',TRUE);
                                echo "Admin ";
                                echo form_radio('role', 'user', FALSE);
                                echo "User";                            
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
                full_name: {
                    required: true
                },
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                }


            },
            messages: {
                full_name: "Please enter text",
                username: "Please enter username",
                email: "Please enter email",
                password: "Please enter password "
            }
        });
    });
</script> 
