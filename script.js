"use strict"

let ans=document.createElement("div");
    ans.id="ans";
let answer=document.getElementById("ans")

  let hr=document.createElement("hr");
  ans.append(hr)

  let head=document.getElementsByTagName('button')
      // h_2.addEventListener('click',function(){add(this)})
      console.log(head[0]);
  
let p_content=["isNan function returns true if the argument is not a number; otherwise, it is false.","Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.","Breaking within a string statement can be done by using a backslash, ‘\\,’ at the end of the first line."];

let a=document.querySelectorAll('#btn');

function faq(x){
  a.forEach((bt)=>{
  console.log(bt)
  console.log(x.parentElement);
  if(x.parentElement.lastChild.innerHTML == ans.innerHTML){
      x.parentElement.lastChild.remove();
      x.innerHTML="+";
  
  }else{
    if(head[0]==x){
      ans.lastChild.remove();
      ans.append(hr,p_content[0]);
      x.parentElement.append(ans);
      x.innerHTML='<i class="fa-solid fa-minus fa-beat-fade"></i>';
      head[1].innerHTML='<i class="fa-solid fa-plus fa-beat-fade"></i>';

      head[2].innerHTML='<i class="fa-solid fa-plus fa-beat-fade"></i>';
    }
   else if(head[1]==x){
    ans.lastChild.remove()
      ans.append(hr,p_content[1]);
      x.parentElement.append(ans);
      x.innerHTML='<i class="fa-solid fa-minus fa-beat-fade"></i>';
      head[0].innerHTML='<i class="fa-solid fa-plus fa-beat-fade"></i>';

      head[2].innerHTML='<i class="fa-solid fa-plus fa-beat-fade"></i>';
    }
    else{
      ans.lastChild.remove();
      ans.append(hr,p_content[2]);
      x.parentElement.append(ans);
      x.innerHTML='<i class="fa-solid fa-minus fa-beat-fade"></i>';
      head[1].innerHTML='<i class="fa-solid fa-plus fa-beat-fade"></i>';
      head[0].innerHTML='<i class="fa-solid fa-plus fa-beat-fade"></i>';
    }
    
  }

})
}
