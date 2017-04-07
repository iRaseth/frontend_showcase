'use-strict'
//Message to visitors :)
		setTimeout(wakeUpUser,10000);
		function wakeUpUser()
		{
			console.log('im still learning duuude');
		};
		
//technologies tiles.
$('#using1').on("click",function(){
				$('.modal1').fadeIn("slow",function(){
				$(this).css("display","block"); });
			});
			$('.close').on("click",function(){
				$('.modal1').fadeOut("slow",function(){
				$(this).css("display","none");});
			});
			$('#using1').on("mouseover",function(){
				$('.tagg').css("display","block");
			});
			$('#using1').on("mouseout",function(){
				$('.tagg').css("display","none");
			});
									$('#using2').on("click",function(){
										$('.modal2').fadeIn("slow",function(){
										$(this).css("display","block"); 
										});
									});
									$('.close').on("click",function(){
										$('.modal2').fadeOut("slow",function(){
										$(this).css("display","none");});
									});
									
													$('#using3').on("click",function(){
														$('.modal3').fadeIn("slow",function(){
														$(this).css("display","block"); });
													});
													$('.close').on("click",function(){
														$('.modal3').fadeOut("slow",function(){
														$(this).css("display","none");});
													});