
$(document).ready(function() {


    


 /*实战揭秘 */  
 
    $(".shizhan-cont .left ul li").hover(function() {
        $(this).addClass('current').siblings().removeClass('current');
        /*alert($(this).index()); 通过上面的li获取响应的索引值，给下面的ul使用*/
        $(".shizhan-cont .right ul li").eq($(this).index()).show().siblings().hide();
    });

/*飞出效果*/
 
    $(window).scroll(function(){
        if ($(window).scrollTop()>1350){
            $(".yunwei-cont .lh").animate({"left":"0"},1500);
            $(".yunwei-cont .lul").animate({"left":"0"},1000);
            $(".yunwei-cont .rh").animate({"right":"0"},1500);
            $(".yunwei-cont .rul").animate({"right":"0"},1000);
        }




        if ($(window).scrollTop()>2200){
            $(".qianjing-cont .huan").animate({"left":"0"},1500);
            $(".qianjing-cont .zhu").animate({"right":"0"},1500);
        }


        if ($(window).scrollTop()>3200){
            $(".tone").animate({"left":"0"},1500);             
        }
        if ($(window).scrollTop()>3850){             
            $(".ttwo").animate({"right":"0"},1500);
        }
          if ($(window).scrollTop()>4500){
            $(".tthree").animate({"left":"0"},1500);
        }
    });

   
/*offer*/

      
         
document.getElementById("one").onclick=function(event){
        // $(".fone").show();
         document.getElementById("img4").style.display="none";
         document.getElementById("img2").style.display="none";
         document.getElementById("img3").style.display="none";
         document.getElementById("img5").style.display="none";
         document.getElementById("img6").style.display="none";
         document.getElementById("img1").style.display="block";
         stopBubble(event);
         document.onclick=function(){
             document.getElementById("img1").style.display="none";
             document.onclick=null;
        }
    }
    document.getElementById("two").onclick=function(event){
        // $(".fone").show();
        document.getElementById("img1").style.display="none";
        document.getElementById("img4").style.display="none";
        document.getElementById("img3").style.display="none";
        document.getElementById("img5").style.display="none";
        document.getElementById("img6").style.display="none";
        document.getElementById("img2").style.display="block";
        stopBubble(event);
        document.onclick=function(){
             document.getElementById("img2").style.display="none";
             document.onclick=null;
        }
    }

    document.getElementById("three").onclick=function(event){
        // $(".fone").show();
         document.getElementById("img1").style.display="none";
         document.getElementById("img2").style.display="none";
         document.getElementById("img4").style.display="none";
         document.getElementById("img5").style.display="none";
         document.getElementById("img6").style.display="none";
         document.getElementById("img3").style.display="block";
         stopBubble(event);
         document.onclick=function(){
             document.getElementById("img3").style.display="none";
             document.onclick=null;
        }
    }

    document.getElementById("four").onclick=function(event){
        // $(".fone").show();
         document.getElementById("img1").style.display="none";
               document.getElementById("img2").style.display="none";
             document.getElementById("img3").style.display="none";
                document.getElementById("img5").style.display="none";
                 document.getElementById("img6").style.display="none";
        document.getElementById("img4").style.display="block";
        stopBubble(event);
        document.onclick=function(){
             document.getElementById("img4").style.display="none";
             
             document.onclick=null;
        }
    }

    document.getElementById("five").onclick=function(event){
        // $(".fone").show();
         document.getElementById("img1").style.display="none";
               document.getElementById("img2").style.display="none";
             document.getElementById("img3").style.display="none";
                document.getElementById("img4").style.display="none";
                 document.getElementById("img6").style.display="none";
        document.getElementById("img5").style.display="block";
        stopBubble(event);
        document.onclick=function(){
             document.getElementById("img5").style.display="none";
            
             document.onclick=null;
        }
    }

    document.getElementById("six").onclick=function(event){
        // $(".fone").show();
        document.getElementById("img6").style.display="block";
        document.getElementById("img1").style.display="none";
               document.getElementById("img2").style.display="none";
             document.getElementById("img3").style.display="none";
                document.getElementById("img5").style.display="none";
                 document.getElementById("img4").style.display="none";
        stopBubble(event);
        document.onclick=function(){
             document.getElementById("img6").style.display="none";
             
             document.onclick=null;
        }
    }

  function stopBubble(e){  
    if(e && e.stopPropagation){
      e.stopPropagation();  //w3c
    }else{
      window.event.cancelBubble=true; //IE
    }
  }


});
