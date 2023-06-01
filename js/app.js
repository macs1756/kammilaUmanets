
setTimeout(()=>{
	document.querySelector('.initial__name-autor').classList.add('active');
document.querySelector('.initial__name-surname').classList.add('active');
}, 700);



const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");
btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("close");
});

btnBurger.addEventListener("click", ()=>{
		document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});

let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
	if(scrollY>10){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
});


const swiper = new Swiper('.swiper', {
	
	autoHeight: true,
	loop: true,
	spaceBetween: 20,
	navigation: {
	  nextEl: '.swiper__next',
	  prevEl: '.swiper__prev',
	},
 
 });
 

 $(document).ready(function() {
	$('.question__body-title').click(function() {
	  $(this).siblings('.question__body-answer').slideToggle();
	  $(this).toggleClass('rotate');
	});
 });