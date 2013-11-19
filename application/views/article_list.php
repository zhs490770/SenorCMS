    <div id="top-layer">
        <a href="https://login.senorsen.com">登录</a>
    </div>
    <div id="list-layer" class="list-layer">
        <div id="list-layer-i" class="list-layer-i">
<!-- Article inner listlayer content start - Senorsen capture -->
<?php
    foreach ($list as $value)
    {
?>
        <div id="list-article-<?php echo $value->id;?>" class="article-button" style="right: -200px" x-dataarea-json="<?php echo urlencode(json_encode($value));?>">
            <span class="a-layer font-hei"><a href="<?php echo base_url();?>article/disp/<?php echo $value->id;?>" id="article-a-<?php echo $value->id;?>" class="article-a-button font-hei" target="_blank"><?php echo htmlspecialchars($value->title);?></a></span>
            <span class="author-layer font-hei"><?php echo htmlspecialchars($value->author);?></span>
            <!--<span><?php echo $value->pubdate;?></span>-->
            <!--<td><?php echo $value->sort;?></td>-->
            <span class="cat-layer font-hei"><?php echo $value->full_name?></span>
        </div>
<?php
    }
?>
<!-- Article inner listlayer content end - Senorsen capture -->
        </div>
    </div>
    <div id="article-layer" class="article-layer">
        <div id="article-layer-i" class="article-layer-i">
        </div>
    </div>
    <div id="preview-layer" class="preview-layer">
        <div id="preview-layer-i" class="preview-layer-i">
        </div>
    </div>
    