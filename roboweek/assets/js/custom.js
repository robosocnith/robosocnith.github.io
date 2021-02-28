(function ($) {
	
	"use strict";

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	
	//Navbar-Styling
	window.onscroll = function() {navScroll()};
	var nav=document.getElementById("nav-area");
	function navScroll() {
		if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
			nav.children[0].classList.remove("container");
			nav.style.top= "0px";
			document.querySelector("nav").style.borderRadius="0px";
			document.querySelector("nav").classList.add("nav-padding");
		} else {
			nav.children[0].classList.add("container");
			nav.style.top="30px";
			document.querySelector("nav").style.borderRadius="40px";
			document.querySelector("nav").classList.remove("nav-padding");
		}
	}

	//FAQs
	for(var i=0;i<document.querySelectorAll(".panel").length;i++){
		document.querySelectorAll(".panel")[i].style.maxHeight="0px";
	}
	var acc=document.querySelectorAll(".accordion");
	for(var i=0;i<acc.length;i++){
		acc[i].addEventListener("click", function(){
			var panel = this.nextElementSibling;
			if(panel.style.maxHeight != "0px"){
				panel.style.maxHeight = "0px";
				this.children[1].innerHTML="<i class='fas fa-chevron-down'></i>";
				panel.classList.remove("pan-active");
			}
			else{
				panel.style.maxHeight = panel.scrollHeight + "px";
				this.children[1].innerHTML="<i class='fas fa-chevron-up'></i>";
				panel.classList.add("pan-active");
			}
		})
	}

	//CARDs
	for(var i=0;i<document.querySelectorAll(".card-body").length;i++){
		document.querySelectorAll(".card-body")[i].style.maxHeight="0px";
	}
	var robImg=document.querySelectorAll(".card-img-top");
	for(var i=0;i<robImg.length;i++){
		robImg[i].addEventListener("mouseout", function(){
			var cardBody = this.nextElementSibling;
			cardBody.style.maxHeight = "0px";
			cardBody.classList.remove("card-active");
		})
		robImg[i].addEventListener("mouseover", function(){
			var cardBody = this.nextElementSibling;
			cardBody.style.maxHeight = cardBody.scrollHeight + "px";
			cardBody.classList.add("card-active");
		})
	}

	// MENU
    $('.nav-link').on('click',function(){
		$(".navbar-collapse").collapse('hide');
	  });
  
  
  
	// SMOOTH SCROLL
	  $(function() {
		$('.nav-link').on('click', function(event) {
		  var $anchor = $(this);
			$('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top - 0
			}, 1000);
			  event.preventDefault();
		});
	  });
	  
	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 130
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 130
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}

	
})(window.jQuery);