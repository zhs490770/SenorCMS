
function c_osulist($list_obj)
{
    this.scrollVelocity = 20;
    this.scrHeight = $(window).height();
    this.$list_obj = $list_obj;
    this.initListLayer();
    this.refreshView(this.$list_obj);
};
c_osulist.prototype = {
    is_on_scroll: 0,
    refresh_view_intvid: -1,
    sel_callback_prepare: function(obj) {},
    on_important_scroll: false,
    on_sel: false
};
c_osulist.prototype.initListLayer = function() {
    var _this = this;
    this.$list_obj.mousewheel(function(event, delta, deltaX, deltaY) {
        $(this).scrollTop($(this).scrollTop() - deltaY * _this.scrollVelocity * 1.5);
    }).children('.list-btn').click(function() {
        _this.applyScroll(10 * parseInt($(this).attr('data-scroll-dir')));
    }).end();
    this.$list_obj.find('.article-button').hover(function() {
        _this.$list_obj.find('.list-btn-up').stop(1, 0).fadeIn();
        _this.$list_obj.find('.list-btn-down').stop(1, 0).fadeIn();
    });
    this.$list_obj.hover(function() {
    }, function() {
        _this.$list_obj.find('.list-btn-up').fadeOut()
        _this.$list_obj.find('.list-btn-down').fadeOut();
    })
};
c_osulist.prototype.applyScroll = function(direction) {
    console.log(direction);
    this.$list_obj.stop(true, false).animate({scrollTop: "+=" + (direction * this.scrollVelocity)});
};
c_osulist.prototype.refreshView = function($o) {
    var _this = this;
    var $ab_o = $o.find('.article-button');
    var r_out = -50, r_in = -120, r_hov = -70;
    $ab_o.hover(function() {
        if ($(this).hasClass('onsel')) return;
        if (!_this.on_sel)
        {
            $(this).removeClass('hov').stop(true, false).animate({right: r_hov}, 200, "swing");
        }
        else
        {
            $(this).removeClass('hov').stop(true, false).animate({right: r_hov}, 200, "swing");
        }
    }, function() {
        if ($(this).hasClass('onsel')) return;
        if (!_this.on_sel)
        {
            $(this).removeClass('hov').stop(true, false).animate({right: r_in}, 200, "swing");
        }
        else
        {
            $(this).removeClass('hov').stop(true, false).animate({right: r_in}, 200, "swing");
        }
    }).click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        _this.on_sel = true;
        var this_button_id = this.id;
        $ab_o.each(function() {
            if (this.id != this_button_id)
            {
                $(this).removeClass('onsel').animate({right: r_in});
            }
        });
        console.log($o.scrollTop()+' '+$(this).offset().top);
        $(this).addClass('onsel').animate({right: r_out});
        _this.sel_callback_prepare(JSON.parse(decodeURIComponent($(this).attr('x-dataarea-json'))));
        $o.animate({scrollTop: $(this).position().top}, 400, function() {
            _this.sel_callback_show();
        });
    }).animate({right: r_in}, 60);
};
c_osulist.prototype.setCallback = function(callback) {
    eval('this.sel_callback_'+callback.action+' = callback.callback;');
};
c_osulist.prototype.addList = function(html) {
    var $obj = $(html);
    this.$list_obj.children('.list-layer-i').append($obj);
    this.refreshView(this.$list_obj);
};
