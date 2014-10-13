<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-edit"></i> Thêm diện tích</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Diện tích</label>
                        <div class="controls">
                            <?php echo form_input('area_range',''); ?>    
                        </div>
                    </div> 
                    <div class="control-group">
                        <label class="control-label" for="textarea">Sort</label>
                        <div class="controls">
                            <?php echo form_input('sort',''); ?>    
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
                area_range: {
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
