

//code for reaveling the "more about Desmond" i.e, the aside...
let moreBtn = document.querySelector("#more-btn");
let moreDetail = document.querySelector("aside");

// for closing the aside section...
let closeBtn = document.querySelector("#invisible");


moreBtn.addEventListener("click", showMore);
closeBtn.addEventListener("click", showNone);

function showMore(){
	moreDetail.classList.remove("show-not");
	moreDetail.classList.toggle("show-me");
}

function showNone(){
	moreDetail.classList.remove("show-me");
	moreDetail.classList.toggle("show-not");
}

//code for animated text reveal..
let reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
	let windowHeight = window.innerHeight;

	reveals.forEach(function (element){
		let elementTop = element.getBoundingClientRect().top;

		if(elementTop < windowHeight - 100){
        element.classList.add("active")
	}
		});
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

//code for whatsapp integration..
let whatsButton = document.querySelectorAll("#whatsapp");


whatsButton.forEach(function(btn) {
	btn.addEventListener("click", function(){
		let phoneNumber = "2349068001346";
		let message = `Good day, I'm interested in building a website for my business. \n 
	                    My name is_____`
      
      let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank");

	})
})
