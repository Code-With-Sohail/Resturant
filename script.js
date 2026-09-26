let imgContainer = document.querySelector(".img-container")
let rightIcon = document.getElementById("right-icon")
let leftIcon = document.getElementById("left-icon")
let add = document.querySelectorAll(".add")
let sub = document.querySelectorAll(".sub")
let number = document.querySelectorAll(".no")
let closed = document.querySelectorAll(".close")
let hideBox = document.querySelectorAll(".blur")
let orderBtn = document.querySelectorAll(".order-btn")
let orderBtni = document.querySelectorAll(".order-btn i")
let orderBtnspan = document.querySelectorAll(".order-btn span")
let dollar = document.querySelectorAll(".dollar")
let foodCard = document.querySelectorAll(".food-card")
let itemBtn = document.querySelectorAll(".items-buttons a")
let allCard = document.getElementById("active")
let heart = document.querySelectorAll(".heart i")
let menuBtn = document.getElementById("menuBtn");
let navbar = document.querySelector(".navbar");

let image = "https://themewagon.github.io/burgerking/img/carousel-1.jpg";
let image1 = "https://themewagon.github.io/burgerking/img/carousel-3.jpg";
let image2 = "https://themewagon.github.io/tasteit/images/bg_1.jpg";
let image3 = "https://themewagon.github.io/tasteit/images/bg_2.jpg";
let image4 = "https://themewagon.github.io/tasteit/images/bg_5.jpg";
let image5 = "https://themewagon.github.io/taste/images/bg_3.jpg";
let image6 = "https://themewagon.github.io/restaurantly/assets/img/hero-bg.jpg";

let currentImg = 0;
let images = [image, image1, image2, image3, image4, image5, image6]
let fixPrice = [14, 12, 16, 25, 19, 30];
let currentValue = Array(foodCard.length).fill(1);

rightIcon.addEventListener("click", function () {
    currentImg++;
    if (currentImg >= images.length) {
        currentImg = 0;
    }
    imgContainer.style = `background: url(${images[currentImg]}); background-repeat: no-repeat; background-position: center;`;
})

leftIcon.addEventListener("click", function () {
    currentImg--;
    if (currentImg <= 0) {
        currentImg = images.length - 1;
    }
    imgContainer.style = `background: url(${images[currentImg]}); background-repeat: no-repeat; background-position: center;`;
})

itemBtn.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        foodCard.forEach((foodCards) => {
            foodCards.style.display = "none";
        })

        foodCard[index].style.display = "block";
    })
})

allCard.addEventListener("click", () => {
    foodCard.forEach((foodCards) => {
        foodCards.style.display = "block";
    })
})


foodCard.forEach((foodCards, index) => {
    foodCards.addEventListener("click", () => {
        document.body.style.overflow = "hidden";
        hideBox[index].style = "display: flex; align-items: center; justify-content: center;";
    })
})


add.forEach((added, index) => {
    added.addEventListener("click", () => {
        currentValue[index]++;
        number.forEach((num, index) => {
            num.textContent = currentValue[index];
            dollar[index].textContent = `$${fixPrice[index] * currentValue[index]}`
        })

    })
})

sub.forEach((subtracted, index) => {
    subtracted.addEventListener("click", () => {
        currentValue[index]--;
        if (currentValue[index] < 1) {
            currentValue[index] = 1;
        }
        number.forEach((num, index) => {
            num.textContent = currentValue[index];
            dollar[index].textContent = `$${fixPrice[index] * currentValue[index]}`
        })

    })
})

orderBtn.forEach((order, index) => {
    order.addEventListener("click", () => {
        orderBtni[index].classList.replace("fa-shopping-cart", "fa-thumbs-up");
        orderBtnspan[index].textContent = "Order Successfull";
        setTimeout(() => {
            orderBtni[index].classList.replace("fa-thumbs-up", "fa-shopping-cart");
            orderBtnspan[index].textContent = "Add to Cart";       
        }, 1000);
    })
})

closed.forEach((cut, index) => {
    cut.addEventListener("click", () => {
        hideBox[index].style = "display:none;";
        document.body.style.overflow = "auto";
    })
})


menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
