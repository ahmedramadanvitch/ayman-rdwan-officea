// start pre-loader
let preLoader = document.querySelector("#pre-loader");

window.addEventListener("load" , () => {
  preLoader.style.display = "none";
})

// ******************************************************* //

// start scroller progress top of page
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// document.documentElement.scrollHeight >>  دى طول الصفحه كامله كلها
// document.documentElement.clientHeight >>  دى طول الحته اللى ظاهره ليك وشايفها قدامك بس

let scrollerTopPage = () => {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
}

window.addEventListener("scroll", scrollerTopPage);

// *************************************************** //

// start button to up
let btnUp = document.querySelector(".btn-up");

let btnUpScroll = () => {
  // btn-up scroll to top
  if (window.scrollY >= 250) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
};

btnUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", btnUpScroll);
// ******************************************* // 