(function () {
  const stageElem = document.querySelector(".stage");
  const houseElem = document.querySelector(".house");
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;

  window.addEventListener("scroll", function () {
    const scrollPer = pageYOffset / maxScrollValue;
    const zMove = scrollPer * 980 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";
  });
})();
