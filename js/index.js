$("h2").on("click", function () {
  var img = this.previousElementSibling;
  var par = this.nextElementSibling;
  if (par.style.display === "block") {
    par.style.display = "none";
    img.style.transform = "rotate(0deg)";
    this.style.fontWeight = "normal";
  } else {
    $("p").css("display", "none");
    $("img").css("transform", "rotate(0deg)");
    $("h2").css("font-weight", "normal");
    par.style.display = "block";
    img.style.transform = "rotate(180deg)";
    this.style.fontWeight = "bold";
  }
});
