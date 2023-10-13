document.addEventListener("DOMContentLoaded", function () {
  let scrollContainer = document.querySelector(".gallery");
  let backbtn = document.getElementById("backbtn");
  let nextbtn = document.getElementById("nextbtn");

  backbtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
          left: -200,
          behavior: "smooth",
      });
  });

  nextbtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
          left: 200, 
          behavior: "smooth",
      });
  });

  scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
  });
});


