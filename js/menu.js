$(".tabs").append("<li id='magic-line'></li>"),$("#magic-line").width($(".active").width()).css("left",$(".active a").position().left);let origLeft=$(".active a").position().left,origWidth=$("#magic-line").width();$(".tabs li").find("a").hover(function(){let i=$(this).position().left,t=$(this).parent().width();$("#magic-line").css({left:i,width:t})},function(){$("#magic-line").css({left:origLeft,width:origWidth})}),$(".photo").hover(function(){$(this).find("a").addClass("btn-over"),$(this).find("a").css("border-color","#008d36")},function(){$(this).find("a").removeClass("btn-over"),$(this).find("a").css("border-color","#fff")}),$(".photo").click(function(){let i=$(this).find("a").attr("href");window.location.href=i});