
function c_osulist()
{
    this.initListLayer();
    this.refreshView($('body'));
};
c_osulist.prototype = {
    is_on_scroll: 0
};
c_osulist.prototype.initListLayer = function() {
    var _this = this;
    $('#list-layer').on('mousemove', function(e) {
        var rel_top = e.pageY-$('body').scrollTop()
        console.log(e.pageX+' '+rel_top);
        if (rel_top <= $(window).height() * 0.4) _this.scrollUp(this);
        else if (rel_top >=  $(window).height() * 0.6) _this.scrollDown(this);
        else _this.scrollStop(this);
    });
    $('#list-layer').mouseleave(function() {
        _this.scrollStop(this);
    });
}
c_osulist.prototype.scrollStop = function(o) {
    console.log('scrollStop');
    this.is_on_scroll = 0;
    $(o).stop(true, false);
}
c_osulist.prototype.scrollUp = function(o, _innercall) {
    var _this = this;
    if (this.is_on_scroll && !_innercall) return;
    console.log('scrollUp');
    this.is_on_scroll = -1;
    $(o).animate({scrollTop: '-=100px'}, 800, "linear", function() {
        if ($(this).scrollTop() <= 0)
        {
            _this.scrollStop(this);
            return;
        }
        _this.scrollUp(this, 1);
    });
}
c_osulist.prototype.scrollDown = function(o, _innercall) {
    var _this = this;
    if (this.is_on_scroll && !_innercall) return;
    console.log('scrollDown');
    this.is_on_scroll = 1;
    $(o).animate({scrollTop: '+=100px'}, 800, "linear", function() {
        if ($(this).scrollTop() >= $(this).height()-$(window).height())
        {
            _this.scrollStop(this);
            return;
        }
        _this.scrollDown(this, 1);
    });
}
c_osulist.prototype.refreshView = function($o) {
    $o.find('.article-button').hover(function() {
        $(this).stop(true, false).animate({right: -10}, 200, "swing");
    }, function() {
        $(this).stop(true, false).animate({right: $(this).attr('data-r')}, 200, "swing");
    });
    $o.find('.article-button').each(function() {
        $(this).css({right: $(this).attr('data-r')});
    });
};