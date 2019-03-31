window.onload = () => {
  document.querySelector("#postIt").style.display = "none";
  document.querySelector("#response").style.display = "none";
  // document.querySelector('#littleFlag').style.display= "none";
  let flagCounter=0;

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
    document.querySelector("#flag").style.display="none";
    setInterval(()=>{
      if (((document.querySelector("#SME").checked) || (document.querySelector("#plateform").checked)) && (!document.querySelector("#text").value=="")){
        document.querySelector("#flag").style.display="block";
      }
      else{
        document.querySelector("#flag").style.display="none";
      };
    }, 1000);

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
      document.querySelector("#flag").style.display="none";
      setInterval(()=>{
        if (((document.querySelector("#SME").checked) || (document.querySelector("#plateform").checked)) && (!document.querySelector("#text").value=="")){
          document.querySelector("#flag").style.display="block";
        }
        else{
          document.querySelector("#flag").style.display="none";
        };
      }, 1000);
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
        console.log('Coucou');
        flagCounter+=1;
        document.querySelector("#nbrCounter").innerText=flagCounter;
        setTimeout ( ()=> {
          document.querySelector("#response").style.display = "none";
        }, 3000)
      }
    });
    
    console.log(flagCounter);
    document.querySelector("#text").value="";
    document.querySelector("#SME").checked=false;
    document.querySelector("#plateform").checked=false;


    document.querySelector("#flag").addEventListener("click", ()=>{
      let active = false;
      let started = false;
      let excludeList = ['#tool', '#postIt', '#postItTitle', '#title', '#closed', '#postItContent', '#help', '#helpTitle', '#helpButton', '#problem', '#problemTitle', '#probForm', '#radio', '#plateform', '#SME','#text', '#buttons', '#flag', '#send', '#response', '#responseP', '#counter', '#counterIcon', '#nbrCounter'];
      activeFlag(active, started, excludeList);
      document.querySelector("#flag").style.display="none";$
    });
  });

}

function activeFlag(active, started, excludeList){

  active = !active;

  document.querySelector("#send").addEventListener("click", ()=>{
    activeFlag(()=>{
      return;
    });
  });

  window.addEventListener('click', (e) => {
    e.preventDefault();
    processEvent(e.target);
  });

  window.addEventListener('mouseover', (e) => {
    if(active){
      applyMask(e.target);
    }
  });

  const applyMask = (target) => {
    if(!exclude(target)){
      if(document.getElementsByClassName('highlight-wrap').length > 0) {
        resizeMask(target);
      }else{
        createMask(target);
      }
    }
  }

  const resizeMask = (target) => {
    let rect = target.getBoundingClientRect();
    let targetDiv = document.getElementsByClassName('highlight-wrap')[0];
    targetDiv.style.top=(window.scrollY+rect.top)+"px";
    targetDiv.style.width=rect.width+"px";
    targetDiv.style.height=rect.height+"px";
    targetDiv.style.left=rect.left+"px";
    targetDiv.style.transition='0.2s';
  }

  const createMask = (target) => {
    started = true
    let rect = target.getBoundingClientRect();
    let targetDiv = document.createElement("div");
    targetDiv.className = 'highlight-wrap';
    targetDiv.style.position='absolute';
    targetDiv.style.top=(window.scrollY+rect.top)+"px";
    targetDiv.style.width=rect.width+"px";
    targetDiv.style.height=rect.height+"px";
    targetDiv.style.left=rect.left+"px";
    targetDiv.style.backgroundColor = '#20508147';
    targetDiv.style.opacity='0.5';
    targetDiv.style.cursor='default';
    targetDiv.style.pointerEvents='none';
    targetDiv.style.zIndex='9999';
    targetDiv.style.transition='0.2s';
    console.log(targetDiv)
    document.body.appendChild(targetDiv);
  }

  const processEvent = (target) => {
    if(!exclude(target)){
      if(started){
        active = false
        let targetDiv = document.getElementsByClassName('highlight-wrap')[0];
        resizeMask(target);
        targetDiv.style.border = '5px dashed #003399';
        document.querySelector('#littleFlag').style.position= "absolute";
        document.querySelector('#littleFlag').style.top=(window.scrollY+rect.top)+"px";
        document.querySelector('#littleFlag').style.left=rect.left+"px";
        console.log(target);
      }
    }
  }

  const exclude = (target) =>{
    let exist = false;
    excludeList.forEach((el)=>{
      if(document.querySelector(el).classList == target.classList){
        exist = true;
      }
    })
    return exist;
  }
}
