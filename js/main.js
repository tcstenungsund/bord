const layoutAir = document.querySelector("#layout-fruit");

const btn = document.querySelector(".settings-btn");
btn.addEventListener("click", function(){
  document.querySelector("#layout-start").style.display = "none";
  
  layoutAir.style.display = "block";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";

});

//if(layoutAir.style.display != "none"){
  //layoutAir.addEventListener("click", function(){
    //document.querySelector(".start-image").style.display = "none";
    //document.querySelector(".methanol-image").style.display = "block";
    //document.querySelector(".air-text-box").style.display = "block";

  //})
  
//}