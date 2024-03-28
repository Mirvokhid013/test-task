let popin = document.querySelector(".header__btn");
let modal = document.querySelector(".modal");
let modalBtn = document.querySelector(".modal-btn");
let mainBody = document.querySelector(".site-main");
let footer = document.querySelector(".footer")

popin.addEventListener("click", function(){
    modal.style.display = 'block';
    mainBody.style.display = 'none'
    footer.style.display = 'none'
})

modalBtn.addEventListener("click", function(){
    modal.style.display = 'none';
    mainBody.style.display = 'block';
    footer.style.display = 'block'
})
