
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
