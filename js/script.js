let onScroll = false;
let rollR = document.querySelectorAll(".roll-r");
let rollL = document.querySelector(".roll-l");
const dropdownHover = document.querySelector('#dropdown');
const subitem = document.querySelector('.subitem');

const scrollProgress = () => {
    onScroll = true;
};

const raf = () => {
    if (onScroll) {
        rollR.forEach((element, index) => {
            element.style.transform = "translateX(" + window.scrollY / 300 + "%)";
        });
        if (onScroll) {
            rollL.style.transform = "translateX(" + window.scrollY / -300 + "%)";
    }
        onScroll = false;
    }
    requestAnimationFrame(raf);
};
requestAnimationFrame(raf);
window.addEventListener("scroll", scrollProgress);


const isInViewport = (elem) => {
	let distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

const slideAnim = document.querySelectorAll('.hidden');
slideAnim.forEach(element => {
    window.addEventListener('scroll', function (event) {
        if (isInViewport(element)) {
            element.classList.add('slide-in');
        }
    },
    false);
});

// tech buttons

const techBtn1 = document.querySelector('.tech-btn1');
const techBtn2 = document.querySelector('.tech-btn2');
const techBtn3 = document.querySelector('.tech-btn3');

techBtn1.addEventListener("click", function () {
    alert("Dashboard switches and handle-mounted gear shifting")
});
techBtn2.addEventListener("click", function () {
    window.alert("Adaptive frame that configures to multiple suspension settings")
});
techBtn3.addEventListener("click", function () {
    window.alert("Streamlined dynamic airvents change profile to optimize performance")
});

// Dropdown menu
dropdownHover.addEventListener('mouseover', () => {
    subitem.classList.add('show');
});

dropdownHover.addEventListener('mouseout', () => {
    subitem.classList.remove('show');
})
