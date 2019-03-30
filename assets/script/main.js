window.onload = () => {
  document.querySelector("#postIt").style.display = "none";

  document.querySelector("#tool").addEventListener("click", ()=>{
    document.querySelector("#postIt").style.display = "block";
    // document.querySelector("#tool").style.backgroundImage="";
    document.querySelector("#closed").addEventListener("click", ()=>{
      document.querySelector("#postIt").style.display = "none";
    });
    document.querySelector("#help").style.display = "none";
    document.querySelector("#helpTitle").addEventListener("click", ()=>{
      document.querySelector("#problem").style.display = "none";
      document.querySelector("#help").style.display = "flex";
    });
    document.querySelector("#problemTitle").addEventListener("click", ()=>{
      document.querySelector("#help").style.display = "none";
      document.querySelector("#problem").style.display = "block";
    });
  });

}
