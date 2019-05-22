/**
*底部弹出菜单
*/

(function($){
    var i,text,len,
            body = $('body'),
            pop = $('.pop');

        // 底层弹出菜单
        pop.on('click',function(){
            var self = $(this),
                sheet = '<div id="sheet" class="mui-popover mui-popover-bottom mui-popover-action "><div class="mui-scroll-wrapper"><div class="mui-scroll"><ul class="mui-table-view option">';

            if($('#sheet')){
                $('#sheet').remove();
            }

            text = $(this).data('pop').split('|');
            len = text.length;

            for(i=0; i<len; i++){
                sheet += '<li class="mui-table-view-cell">' +
                    '<a>' + text[i] + '</a>' +
                    '</li>';
            }
            sheet += '</ul></div></div><ul class="mui-table-view cancel-wrap"><li class="mui-table-view-cell"><a class="cancel" href="#sheet"><b>取消</b></a></li></ul></div>';
            body.append(sheet);
            var popEle = mui('#sheet')
            popEle.popover('toggle');

            mui('.mui-scroll-wrapper').scroll();

            if(len >= 7){
                $('.mui-popover').height(8 * 44 + 'px');
            }
            else{
                $('.mui-popover').height((len+2) * 40 + 'px');
            }

            var links = $('.option .mui-table-view-cell');

            // 点击弹出菜单内容列表内容改变
            links.on('click',function(){
                self.find('.tips').text($(this).text()).addClass('active');
                self.find('[type=hidden]').val($(this).text())
                popEle.popover('hide');
            })
        });
})(jQuery)