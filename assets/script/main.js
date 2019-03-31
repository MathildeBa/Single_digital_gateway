window.onload = () => {
  document.querySelector("#postIt").style.display = "none";
  document.querySelector("#response").style.display = "none";

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
      document.querySelector("#text").value="";
      document.querySelector("#SME").checked=false;
      document.querySelector("#plateform").checked=false;
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

    document.querySelector("#send").addEventListener("click", ()=>{
      if ((!(document.querySelector("#SME").checked) && !(document.querySelector("#plateform").checked)) || (document.querySelector("#text").value=="")){
        document.querySelector("#response").style.display = "block";
        document.querySelector("#responseP").innerText="Please, fill all the fields !";
        setTimeout ( ()=> {
          document.querySelector("#response").style.display = "none";
        }, 3000)
      }
      else{
        document.querySelector("#response").style.display = "block";
        document.querySelector("#responseP").innerText="Your feedback has been taken in consideration. Thank you !";
        document.querySelector("#postIt").style.display = "none";
        document.querySelector("#tool").style.backgroundImage="url('assets/images/tools/btn_feedback.png')";
        document.querySelector("#text").value="";
        document.querySelector("#SME").checked=false;
        document.querySelector("#plateform").checked=false;
        let flagCounter=0;
        flagCounter+=1;
        document.querySelector("#nbrCounter").innerText=flagCounter;
        setTimeout ( ()=> {
          document.querySelector("#response").style.display = "none";
        }, 3000)
      }
    });
  });

  // document.querySelector('#probForm').button

}
