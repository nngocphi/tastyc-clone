const header = document.querySelector(".header__container");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 50 ||
		document.documentElement.scrollTop > 50
	) {
		header.classList.add("scroll-down");
	} else {
		header.classList.remove("scroll-down");
	}
}

const mobileAppImg = document.querySelector(".mobile-app__img");

window.addEventListener("scroll", scrolling);

function scrolling() {
	const triggerBottom = window.innerHeight * (4 / 5);
	const imgTop = mobileAppImg.getBoundingClientRect().top;
	if (triggerBottom > imgTop) {
		mobileAppImg.classList.add("show");
	} else {
		mobileAppImg.classList.remove("show");
	}
}
