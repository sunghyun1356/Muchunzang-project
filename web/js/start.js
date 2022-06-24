const main=document.querySelector("#main");
const qna=document.querySelector("#qna");
const select=[];


function addAnswer(answerText,qIdx,Idx){
    
    var a=document.querySelector('.answerBox');
    var answer=document.createElement('button');
    answer.classList.add('answerList');//classlist.add: clas 하나 추가
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML=answerText;
    answer.addEventListener("click",function(){
        select[qIdx]=Idx;
        var children=document.querySelectorAll('.answerList');
        for(let i=0;i<children.length;i++){
            children[i].disabled=true;
            children[i].style.animation="fadeOut 0.5s"
            children[i].style.WebkitAnimation="fadeOut 0.5s"
            children[i].style.display='none';
        }
        setTimeout(()=>{
           
           
            for(let i=0;i<children.length;i++){
                children[i].style.display='none';
            }
            
        
        },450)
        console.log("select");
     
      if(select[0]==1){
        goNext(2);
      }
      else{
      goNext(1);}
      console.log(select);
    },false);
    }
   
function goNext(qIdx){
    var q=document.querySelector('.qBox');
    q.innerHTML=qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
        
    }
    
}


function begin(){
    main.style.WebkitAnimation="fadeOut 1s";
    main.style.animation="fadeOut 1s";
    setTimeout(()=>{
        
        qna.style.WebkitAnimation="fadeIn 1s";
        qna.style.animation="fadeIn 1s";
        setTimeout(()=>{
            main.style.display="none";
            qna.style.display="block"
        },450)
        let qIdx=0;
        goNext(qIdx);
    },450);
}
