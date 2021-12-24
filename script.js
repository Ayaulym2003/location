$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".menu").css("background" , "rgb(39, 34, 33)");
        }
  
        else{
            $(".menu").css("background" , "transparent");  	
        }
    })
  })
  
  var lastScrollTop = 0;
  
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
     if (st > lastScrollTop){
        // downscroll code
        $(".menu").css("top" , "-100px");
     } else {
        // upscroll code
        $(".menu").css("top" , "0px"); 
     }
     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
  


  let car1 = document.getElementById('re');

  window.addEventListener('scroll', function(){
  let value = window.scrollY;
  car1.style.marginLeft = value * 1.2 + 'px';
  
  })
    

  let ev = document.getElementById('ev');

  window.addEventListener('scroll', function(){
  let value = window.scrollY;
  ev.style.marginLeft = value * 0.17 + 'px';
  
  })
    
  let yn = document.getElementById('yn');

  window.addEventListener('scroll', function(){
  let value = window.scrollY;
  yn.style.marginLeft = value * -0.16 + 'px';
  
  })
  let we = document.getElementById('we');

  window.addEventListener('scroll', function(){
  let value = window.scrollY;
  we.style.marginTop = value * -0.16 + 'px';
  
  })
 
  AOS.init();