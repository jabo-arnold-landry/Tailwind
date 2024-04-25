const input=document.querySelector("#email");
const err=document.querySelector("#error")
const btn=document.querySelector("button")
const box=document.querySelector("#box")
const close=document.querySelector("#close")
const overlay=document.querySelector("#overlay")
const email=document.querySelector("b")
console.log(email)
btn.addEventListener("click",(e)=>{
   let messages=[];
   if(!input.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
      messages.push("please use a valid email !")
   }
   else{
      e.preventDefault()
      box.classList.remove("hidden")
      overlay.classList.remove("hidden")
      email.textContent=input.value
   }
   if(messages.length>0){
      e.preventDefault()
       err.textContent=messages.join(",")
       input.classList.add("border-red-400")
       input.classList.add("bg-red-200")
   }
  
})
close.addEventListener("click",()=>{
   box.classList.add("hidden")
   overlay.classList.add("hidden")
})

