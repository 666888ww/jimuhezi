
$(function(){
   var c=0;
   var timer=setInterval(run,5000);
   	function run(){
  	c++;
  	c=c==4?0:c;
   	$("#imag img").eq(c).fadeIn(300).siblings("img").fadeOut(300);
    $("#imag ul li").eq(c).css("background","#fff")
    .siblings('li').css("background","#bdbed0");
  } 
  $("#imag").hover(function(){
  	clearInterval(timer);
  }, function(){
  	 timer=setInterval(run,5000);
  })
   $("#imag ul li").mouseenter(function(){
   	c=$(this).index();
    $("#imag img").eq(c).fadeIn(300).siblings("img").fadeOut(300);
    $("#imag ul li").eq(c).css("background","#fff")
    .siblings('li').css("background","#bdbed0");
   })
 $("#conttop .panel-body #one").hover(function(){
                     
   $("#conttop .panel-body #one img ").addClass("dropdown"); 
}
 ,function(){})
 $("#conttop .panel-body #two").hover(function(){
                     
   $("#conttop .panel-body #two img ").addClass("dropdown"); 
}
 ,function(){})
 $("#conttop .panel-body #there").hover(function(){
                     
   $("#conttop .panel-body #there img ").addClass("dropdown"); 
}
 ,function(){})
 $("#conttop .panel-body #four").hover(function(){
                     
   $("#conttop .panel-body #four img ").addClass("dropdown"); 
}
 ,function(){})
 $("#contmiddle .row #col1").hover(function(){
  $("#contmiddle #col1").addClass("jaohu1"); 
}
 ,function(){
 	 $("#contmiddle #col1").removeClass("jaohu1");
 })
 $("#contmiddle .row #col2").hover(function(){
  $("#contmiddle #col2").addClass("jaohu1"); 
}
 ,function(){
 	 $("#contmiddle #col2").removeClass("jaohu1");
 })
 $("#contdown1 .row #contdown1_left1").hover(function(){
  $("#contdown1 #contdown1_left1").addClass("jaohu1"); 
}
 ,function(){
 	 $("#contdown1 #contdown1_left1").removeClass("jaohu1");
 })
 $("#contdown1 .row #contdown1_left2").hover(function(){
  $("#contdown1 #contdown1_left2").addClass("jaohu1"); 
}
 ,function(){
 	 $("#contdown1 #contdown1_left2").removeClass("jaohu1");
 })
 $("#contdown1 .row #contdown1_right1").hover(function(){
$("#contdown1 #contdown1_right1").addClass("jaohu2");
$("#contdown1 #contdown1_right1 .yuan").fadeIn(300);
}
 ,function(){
 	 $("#contdown1 #contdown1_right1 .yuan").fadeOut(300) })
 
  $("#contdown1  #contdown1_right2").hover(function(){
$("#contdown1 #contdown1_right2").addClass("jaohu2");
$("#contdown1  #contdown1_right2 .yuan").fadeIn(300);
}
 ,function(){
 	 $("#contdown1 #contdown1_right2 .yuan").fadeOut(300) })
})
