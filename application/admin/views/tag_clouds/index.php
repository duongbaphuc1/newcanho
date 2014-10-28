<div class="row-fluid">
    <div class="span12">
        <p><a href="/admin" class="btn btn-medium btn-primary"><i class="icon-chevron-left icon-white"></i> Home</a>
            <a href="/admin/index.php/tag_clouds/add" class="btn btn-medium btn-primary"><i class="icon-plus-sign icon-white"></i> Add</a>
            
        </p>
    </div>
</div>
<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header well" data-original-title>
            <h2><i class="icon-edit"></i> Configs</h2>            
        </div>        
        <div class="box-content">
            <table class="table table-striped table-bordered bootstrap-datatable datatable">
                <thead>
                    <tr>
                        <th>Tên Tag</th>
                        <th>Link</th>                    
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (!empty($tag_clouds)):
                        foreach ($tag_clouds as $tag_cloud):
                            ?>
                            <tr>
                                <td class="left"><?php echo $tag_cloud->tag_name ?></td>
                                <td class="left"><?php echo $tag_cloud->link ?></td>
                                <td class="center">
                                    <a class="btn btn-success" href="/admin/index.php/tag_clouds/edit/<?php echo $tag_cloud->id ?>">
                                        <i class="icon-edit icon-white"></i>
                                        edit
                                    </a>
                                    <a class="btn btn-danger" href="/admin/index.php/tag_clouds/delete/<?php echo $tag_cloud->id ?>">
                                        <i class="icon-edit icon-white"></i>
                                        delete
                                    </a>
                                    <?php if($tag_cloud->is_active==0):?>
                                    <a class="btn btn-success" href="/admin/index.php/tag_clouds/active/<?php echo $tag_cloud->id ?>">
                                        <i class="icon-edit icon-white"></i>
                                        Active
                                    </a>
                                    <?php else:?>
                                    <a class="btn btn-success" href="/admin/index.php/tag_clouds/unactive/<?php echo $tag_cloud->id ?>">
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
    });

</script>