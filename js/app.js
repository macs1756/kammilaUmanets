



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



if(!document.querySelector('.politic')){



	$(document).ready(function() {
		$('.question__body-title').click(function() {
		  $(this).next('.question__body-answer').slideToggle();
		  $(this).toggleClass('rotate');
		});
	 });


	window.addEventListener("scroll", ()=>{
		if(scrollY>10){
			header.classList.add("header__scroll");
		}else{
			header.classList.remove("header__scroll");
		}
	});



const mainElement = document.querySelector('.main');
const dekorElement = document.querySelector('.dekor');

// Додаємо подію "hover" на елемент main
mainElement.addEventListener('mouseenter', function() {
  // Додаємо стилі до класу dekor
  dekorElement.classList.add('rotate4');
});

// Видаляємо стилі при знятті "hover" з елементу main
mainElement.addEventListener('mouseleave', function() {
  // Видаляємо стилі з класу dekor
  dekorElement.classList.remove('rotate4');
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

	 const AllImgForm = document.querySelectorAll('.img-trigger');

	 AllImgForm.forEach((el)=>{
		el.addEventListener('click', ()=>{
			window.location.hash = 'form';
		});
	 })






	 const netImgElement = document.querySelector('.t1');
	 const firstNetElement = document.querySelector('.tg1');
	 
	 netImgElement.addEventListener('mouseenter', function() {
		firstNetElement.style.borderRadius = '15px';
	 });
	 
	 netImgElement.addEventListener('mouseleave', function() {
		firstNetElement.style.borderRadius = '';
	 });


	 const netImgElement2 = document.querySelector('.t2');
	 const firstNetElement2 = document.querySelector('.tg2');
	 
	 netImgElement2.addEventListener('mouseenter', function() {
		firstNetElement2.style.borderRadius = '15px';
	 });
	 
	 netImgElement2.addEventListener('mouseleave', function() {
		firstNetElement2.style.borderRadius = '';
	 });







	 setTimeout(()=>{
		document.querySelector('.initial__name-autor').classList.add('active');
	document.querySelector('.initial__name-surname').classList.add('active');
	}, 700);
}else{
	header.classList.add("header__scroll");
}




 