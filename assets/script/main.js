window.onload = () => {
  document.querySelector("#postIt").style.display = "none";

  // const targetDiv = (e)=>{
  //   let target=e.target;
  //   let test = target.innerHTML;
  //   if( test.indexOf('</p>') == -1){
  //     e.target.style.border="1px solid blue";
  //   }
  //     // e.target.style.border="1px solid blue";
  // }
  // const untargetDiv = (e)=>{
  //   let target=e.target;
  //
  //   e.target.style.border="none";
  // }
  // const clickTargetDiv = (e)=>{
  //   let target=e.target;
  //   let test = target.innerHTML;
  //   if( test.indexOf('</p>') == -1){
  //     console.log(target.innerText);
  //   }
  // }
  //
  // document.addEventListener('mouseover',targetDiv);
  // document.addEventListener('mouseout',untargetDiv);
  // document.addEventListener('click',clickTargetDiv);

  document.querySelector("#tool").addEventListener("click", ()=>{
    document.querySelector("#postIt").style.display = "block";
    document.querySelector("#tool").style.backgroundImage="url('assets/images/tools/btn_while_write.png')";
    document.querySelector("#help").style.display = "none";

    document.querySelector("#closed").addEventListener("click", ()=>{
      document.querySelector("#postIt").style.display = "none";
      document.querySelector("#help").style.display = "none";
      document.querySelector("#problem").style.display = "block";
      document.querySelector("#postIt").style.backgroundImage="url('assets/images/tools/postIt_yellow.png')";
      document.querySelector("#tool").style.backgroundImage="url('assets/images/tools/btn_feedback.png')";
    });

    document.querySelector("#helpTitle").addEventListener("click", ()=>{
      document.querySelector("#problem").style.display = "none";
      document.querySelector("#help").style.display = "flex";
      document.querySelector("#postIt").style.backgroundImage="url('assets/images/tools/postIt_blue.png')";
    });

    document.querySelector("#problemTitle").addEventListener("click", ()=>{
      document.querySelector("#help").style.display = "none";
      document.querySelector("#problem").style.display = "block";
      document.querySelector("#postIt").style.backgroundImage="url('assets/images/tools/postIt_yellow.png')";
    });
  });

}
