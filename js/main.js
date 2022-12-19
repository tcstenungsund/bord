const layoutAir = document.querySelector("#layout-air");

const btn = document.querySelector(".settings-btn");
btn.addEventListener("click", function(){
  document.querySelector("#layout-start").style.display = "none";
  layoutAir.style.display = "block";

});

if(layoutAir.style.display != "none"){
  layoutAir.addEventListener("click", function(){
    document.querySelector(".image").style.display = "none";
    document.querySelector(".image-2").style.display = "block";
    document.querySelector(".text-box-air").style.display = "block";

  })
  
}