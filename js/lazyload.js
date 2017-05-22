 function isShow($el){
          var winH = $(window).height(),//获取窗口高度
                scrollH = $(window).scrollTop(),//获取窗口滚动高度
                top = $el.offset().top;//获取元素距离窗口顶部偏移高度
         if(top < scrollH + winH){
              return true;//在可视范围
            }else{
              return false;//不在可视范围
            }
   }
         function checkShow(){//检查元素是否在可视范围内
                $('div[flag=gp]').each(function(){//遍历每一个元素
                    var $cur = $(this);
                    //if(!!isloaded($cur)){return;}//判断是否已加载
                    if (isShow($cur)) {
                      setTimeout(function(){
                        showImg($cur);
                        },300)//设置时间是为了更好的看出效果
                    };
                });
         }
         function showImg($el){
             $el.children("div").fadeIn(800);
         }
        
        $(window).on('scroll', function(){//监听滚动事件
            
            checkShow();
        })
