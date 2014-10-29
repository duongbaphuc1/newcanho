<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-edit"></i> Chỉnh sửa khoảng giá</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Khoảng giá</label>
                        <div class="controls">
                            <?php echo form_input('price_range',$listPrice['price_range']); ?>    
                        </div>
                    </div>                    
                    <div class="control-group">                       
                        <div class="controls">
                            <?php 
                            if($listPrice['type']==1){    
                                echo form_radio('type', '1',TRUE);
                                echo "Văn phòng";
                                echo form_radio('type', '0', FALSE);
                                echo "Khác";
                            }
                            else{
                                echo form_radio('type', '1',FALSE);
                                echo "Văn phòng";
                                echo form_radio('type', '0', TRUE);
                                echo "Khác";
                            }
                            ?>                                                  
                        </div>
                    </div>                    
                    <div class="control-group">
                        <label class="control-label" for="textarea">Sort</label>
                        <div class="controls">
                            <?php echo form_input('sort',$listPrice['sort']); ?>    
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Active</label>
                        <div class="controls">
                            <?php if($listPrice['is_active']==1):?>
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
                window.location = "/admin/index.php/prices";
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
