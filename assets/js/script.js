// Header
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

// Welcome slider
const dots = document.querySelectorAll(".welcome-slider__dot");
const slides = document.querySelectorAll(".welcome__img");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("active");
}

// Mobile app img
const mobileAppImg = document.querySelector(".mobile-app__img");
const mobileAppContent = document.querySelector(".mobile-app__content");
const footer = document.querySelector(".footer");

window.addEventListener("scroll", scrolling);

function scrolling() {
	const triggerBottomImg = window.innerHeight * (3 / 5);
	const imgTop = mobileAppImg.getBoundingClientRect().top;
	if (triggerBottomImg > imgTop) {
		mobileAppImg.classList.add("show");
	} else {
		mobileAppImg.classList.remove("show");
	}

	const triggerBottomContent = window.innerHeight;
	const contentTop = mobileAppContent.getBoundingClientRect().top;
	if (triggerBottomContent > contentTop) {
		mobileAppContent.classList.add("show");
	} else {
		mobileAppContent.classList.remove("show");
	}

	const triggerBottomFooter = window.innerHeight * (4 / 5);
	const footerTop = footer.getBoundingClientRect().top;
	if (triggerBottomFooter > footerTop) {
		footer.classList.add("show");
	} else {
		footer.classList.remove("show");
	}
}

// Auto increment counter
const aboutStastistic = document.querySelector(".about__statistics");

window.addEventListener("scroll", () => {
	const stastisticPosition = aboutStastistic.getBoundingClientRect().top;
	const screenPosition = window.innerHeight * (4 / 5);

	if (stastisticPosition < screenPosition) {
		const counters = document.querySelectorAll(".statistics__counter");
		const speed = 10000;

		counters.forEach((counter) => {
			const updateCount = () => {
				const target = +counter.getAttribute("data-target");
				const count = +counter.innerText;

				const increment = target / speed;

				if (count < target) {
					counter.innerText = Math.ceil(count + increment);
					setTimeout(updateCount, 10);
				} else {
					count.innerText = target;
				}
			};

			updateCount();
		});
	}
});

// Back to top
function topFunction() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
