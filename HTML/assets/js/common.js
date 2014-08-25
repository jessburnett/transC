$(document).ready(function(){
	$("ul li a").each(function(){
		isActive = $(this).hasClass("active");
		if(isActive) {
			$(this).addClass("fa-rotate");	
			$(this).siblings("ul").removeClass("closed");
		}
	})

	$("#main-nav ul li").click(function(){
		var open = $(this).children("a").hasClass("fa-rotate");
		if(open){
			closeAll();
		} else {
			closeAll();
			$(this).children("a").addClass("fa-rotate");
			$(this).children("a").addClass("active");
			$(this).children("ul").removeClass("closed");
		}
	})

	//color even table rows
	$("#content table tr:odd").children("td").addClass("light-blue");

	//handle pipeline select
	whichPipeline = $("#switch-pipeline-list a.active").text();

	$("#select-pipeline").text(whichPipeline);

	$("#select-pipeline").click(function(e){
		var container = $("#switch-pipeline-list");
		isOpen = $("#switch-pipeline-list").hasClass("open");


		if (isOpen) {
			$("#switch-pipeline-list").removeClass("open");
		}else{
			$("#switch-pipeline-list").addClass("open");
		}
	})

	$("#switch-pipeline-list a").click(function(){
		$("#switch-pipeline-list a").removeClass("active");
		$(this).addClass("active");
		whichPipeline = $(this).text();
		$("#select-pipeline").text(whichPipeline);
		$("#switch-pipeline-list").removeClass("open");
	})	

	/*$(document).mouseup(function (e){
	    var container = $("#switch-pipeline-list");

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        $("#switch-pipeline-list").removeClass("open");
	    }
	});*/
})

function closeAll(){
	$("#main-nav > ul > li > a").removeClass("active");
	$("#main-nav > ul > li > a").removeClass("fa-rotate");
	$("#main-nav > ul > li > a").siblings("ul").addClass("closed");
}