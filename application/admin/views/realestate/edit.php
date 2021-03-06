<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-edit"></i> Chỉnh sửa tin tức Bất động sản</h2>
        </div>        
        <div class="box-content">
            <form class="form-horizontal" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend></legend>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tiêu đề</label>
                        <div class="controls">
                            <?php echo form_input('title', $realestate['title']); ?>
                        </div>                        
                    </div>                    
                    <div class="control-group">
                        <label class="control-label" for="textarea">Loại dịch vụ</label>
                        <div class="controls">
                            <?php                                     
                                if (!empty($categories)){                                    
                                    echo form_dropdown('category_id',$categories,$realestate['category_id']);    
                                }
                            ?>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Dự án</label>
                        <div class="controls">
                            <?php echo form_input('project_id',$realestate['project_id'], "id='project_id'" ); ?><br>
                            <input type="hidden" value="
                                <?php 
                                 if (!empty($project_name)){   
                                    echo $project_name;} 
                                ?>" name="project_name"  id="project_name" />
                        </div>        
                    </div>                    
                    <div class="control-group">
                        <label class="control-label" for="textarea">Địa chỉ</label>
                        <div class="controls">
                            <textarea name="address"><?php echo $realestate['address'] ?></textarea>                        
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Quận</label>
                        <div class="controls">
                            <?php 
                                    if (!empty($district)){                                    
                                    echo form_dropdown('district_id',$district,$realestate['district_id']);    
                                }                                
                            ?>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Khoảng giá</label>
                        <div class="controls">
                            <?php 
                                    if (!empty($price)){                                    
                                        echo form_dropdown('price_id',$price,$realestate['price_id']);
                                    }
                            ?>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Diện tích</label>
                        <div class="controls">
                            <?php 
                                    if (!empty($area)){                                    
                                        echo form_dropdown('area_id',$area,$realestate['area_id']);
                                    } 
                            ?>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Giá</label>
                        <div class="controls">
                            <?php echo form_input('price', $realestate['price']); ?>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="image">Hình</label>
                        <div class="controls">
                            <input type="file" id="product_image" name="image0" />
                            <input type="file" id="product_image" name="image1" />
                            <input type="file" id="product_image" name="image2" />
                            <input type="file" id="product_image" name="image3" />
                            <input type="file" id="product_image" name="image4" />
                            <input type="file" id="product_image" name="image5" />
                            <input type="file" id="product_image" name="image6" />
                            <input type="file" id="product_image" name="image7" />
                            <input type="file" id="product_image" name="image8" />
                            <input type="file" id="product_image" name="image9" />                            
                            <div class="note-upload">
                                Extentions : png, gif, jpg and < <?php echo $this->config->item("max_size"); ?> kb
                            </div>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Hình</label>
                        <div class="controls">
                            <?php
                                $images = explode("&fieldbreak;", $realestate['image']);                               
                                foreach ($images as $image){
                                    if($image!=""){
                                        echo "<div style='float:left;width:110px'>";
                                        echo "<div><input id='del_image' name='del_image[]' type='checkbox' value='".$image."'/>Xóa </div>";
                                        echo "<div><img class='img-logo' src='/upload/@files/".$image."' /></div>";                                        
                                        echo "</div>";
                                    }
                                }
                                echo "<input name='old_image' id='old_image' type='hidden' value='".$realestate['image']."'>";
                            ?>
                            
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tag</label>
                        <div class="controls">
                             <?php $list = array('1','5');
                                     echo form_dropdown('tags[]', $tags, $tagsEdit, "id = 'tags' multiple='multiple' style='width:400px;'"); ?>                        
                        </div>
                    </div>                    
                    <div class="control-group">
                        <label class="control-label" for="textarea">Tiêu đề SEO</label>
                        <div class="controls">
                            <?php echo form_input('seo_title', $realestate['seo_title']); ?>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Mô tả SEO</label>
                        <div class="controls">
                            <textarea name="seo_desc"><?php echo $realestate['seo_desc'] ?></textarea>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">SEO Keyword</label>
                        <div class="controls">
                            <textarea name="seo_keyword"><?php echo $realestate['seo_keyword'] ?></textarea>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Nội dung</label>
                        <div class="controls">
                            <textarea name="description"><?php echo $realestate['description'] ?></textarea>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Long</label>
                        <div class="controls">
                            <?php echo form_input('long', $realestate['long']); ?>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Lat</label>
                        <div class="controls">
                            <?php echo form_input('lat', $realestate['lat']); ?>
                        </div>                        
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="textarea">Active</label>
                        <div class="controls">
                            <?php if($realestate['is_active']==1):?>
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
                category_id: {
                    required: true
                },
                address: {
                    required: true
                },
                district_id: {
                    required: true
                },
                area_id: {
                    required: true
                },
                price: {
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
<script>

    function movieFormatResult(movie) {
        var markup = "<table class='movie-result'><tr>";
        if (movie.posters !== undefined && movie.posters.thumbnail !== undefined) {
            markup += "<td class='movie-image'><img src='" + movie.posters.thumbnail + "'/></td>";
        }
        markup += "<td class='movie-info'><div class='movie-title'>" + movie.title + "</div>";
        if (movie.critics_consensus !== undefined) {
            markup += "<div class='movie-synopsis'>" + movie.critics_consensus + "</div>";
        }
        else if (movie.synopsis !== undefined) {
            markup += "<div class='movie-synopsis'>" + movie.synopsis + "</div>";
        }
        markup += "</td></tr></table>";
        return markup;
    }

    function movieFormatSelection(movie) {
        return movie.title;
    }

</script>





<script type="text/javascript">
    
    $(document).ready(function() {
        $("#tags").select2();        
    
        $('#project_id').select2({
            width: '220px',
            placeholder: "Search project",
            allowClear: true,
            minimumInputLength: 2,            
            ajax: {
                url: "/admin/index.php/realestate/getPro",
                dataType: 'json',                
                data: function (term, page) {
                    return {
                        term: term
                    };
                },
                results: function (data) {
                    var myResults = [];
                    $.each(data, function (index, item) {
                        myResults.push({
                            'id': item.id,
                            'text': item.value
                        });
                    });
                    return {
                        results: myResults
                    };
                }                
            },            
            initSelection: function (element, callback) {
                //var elementText = $(element).attr('data-init-text');
                
                var $id = $(element).val();

                if ($id != '') {
                    var $data = {id: $id, text: $("#project_name").val()};
                    callback($data);
                }                                
            },
        });
    });
</script>
