<div class="row-fluid">
    <div class="span12">
        <p><a href="/admin" class="btn btn-medium btn-primary"><i class="icon-chevron-left icon-white"></i> Home</a>
            <a href="/admin/index.php/advs/add" class="btn btn-medium btn-primary"><i class="icon-plus-sign icon-white"></i> Add</a>
            <a href="javascript:void()" id="savesort" class="btn btn-medium btn-primary"><i class="icon-plus-sign icon-white"></i> Save sort</a>
        </p>
    </div>
</div>
<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-list-alt"></i> Advs</h2>            
        </div>        
        <div class="box-content">
            <form method="post" id="frm_sort">
            <table class="table table-striped table-bordered bootstrap-datatable datatable">
                <thead>
                    <tr>
                        <th>Link</th>
                        <th>Sort</th>
                        <th>Hình</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (!empty($listCats)):
                        foreach ($listCats as $cat):
                            ?>
                            <tr>
                                <td class="left"><?php echo $cat->link ?></td>
                                <td><input maxlength="3" type="text" name="sort[<?php echo $cat->id ?>][]" value="<?php echo $cat->sort ?>" /></td>
                                <td class="left">
                                    <a class="image-in-modal" href="#">
                                        <img class="img-logo grayscale" src="/public/images/upload/<?php echo $cat->image ?>"/>
                                    </a>
                                </td>
                                <td class="center">
                                    <a class="btn btn-success" href="/admin/index.php/advs/edit/<?php echo $cat->id ?>">
                                        <i class="icon-edit icon-white"></i>
                                        edit
                                    </a>
                                    <a class="btn btn-danger" href="/admin/index.php/advs/delete/<?php echo $cat->id ?>">
                                        <i class="icon-edit icon-white"></i>
                                        delete
                                    </a>
                                    <?php if($cat->is_active==0):?>
                                    <a class="btn btn-success" href="/admin/index.php/advs/active/<?php echo $cat->id ?>">
                                        <i class="icon-edit icon-white"></i>
                                        Active
                                    </a>
                                    <?php else:?>
                                    <a class="btn btn-success" href="/admin/index.php/advs/unactive/<?php echo $cat->id ?>">
                                        <i class="icon-edit icon-white"></i>
                                        UnActive
                                    </a>
                                    <?php endif ;?>
                                </td>
                            </tr>   
                            <?php
                        endforeach;
                    endif;
                    ?>
                </tbody>
            </table>
            </form>
        </div>
    </div><!--/span-->
</div><!--/row-->
<!-- alert-->
<div id="modal-from-dom" class="modal hide fade">
    <div class="modal-header">
        <a href="#" class="close">&times;</a>
        <h3>Warning Delete</h3>
    </div>
    <div class="modal-body">        
        <p>Do you want to delete this record?</p>
    </div>
    <div class="modal-footer">
        <a href="" class="btn danger confirm">Yes</a>
        <a href="javascript:$('#modal-from-dom').modal('hide')" class="btn secondary">No</a>
    </div>
</div>

<script>
    $(document).ready(function() {
        $(".btn.btn-danger").click(function(e) {
            e.preventDefault();
            $(".confirm").attr("href", $(this).attr("href"));
            $('#modal-from-dom').modal('show');
        });
        $('.image-in-modal').live("click", function() {
            var imageUrl = $(this).find('img').attr('src'),
                    imageHtml = '<img src="' + imageUrl + '" />';
            loadModal(imageHtml);
        });
        $("#savesort").click(function(){
            $("#frm_sort").submit();
        });
    });

</script>