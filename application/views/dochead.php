<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><?php echo htmlspecialchars($title);?></title>
<link rel="stylesheet/less" type="text/css" href="<?php echo base_url();?>res/style/osulist.less">
<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>res/style/fonts.css">
<script src="<?php echo base_url();?>res/lib/less-1.5.0.min.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>res/lib/jquery-2.0.3.min.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>res/lib/jquery-migrate-1.2.1.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>res/lib/jquery.mousewheel.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>res/js/config.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>res/js/model.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>res/js/osulist.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>res/js/article.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>res/js/view.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>res/js/controller.js" type="text/javascript"></script>

<script>
    // url_prefix
    var url_prefix = '<?php echo base_url();?>';
    /**
     * 返回base_url后的地址
     * @param  {string} url 相对路径
     * @return {string}     处理后地址
     */
    function base_url(url) {
        if (typeof url == 'undefined') url = '';
        return url_prefix+url;
    }
    $(function() {
        window.controller = new c_controller();
    });
</script>

</head>

<body>