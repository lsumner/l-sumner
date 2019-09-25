/*function greeter(question = "what is your name"){
let answer = prompt (question);

if(answer === ""){
  greeter();
 }
 return answer;
}
//document.querySelector("#root").innerHTML="<p>" + greeter() +"</p>";//
document.querySelector("#root").innerHTML='<p>${greeter()}</p>'
console.log(h1TextContent);
answer = prompt(question);
console.log("you did not answer")*/
//select fa-hamburger
//listen for click on hamburger
//remove hidden mobile class

const hamburger =
document.querySelector(".fa-hamburger");
const hiddenUL = document.querySelector("UL");
hamburger.addEventListener('click',()=>{
//console.log("Hello From Hamburger");//
//hiddenUL.classList.remove("is-hidden--mobile");
hiddenUL.classList.toggle("is-hidden--mobile");
})








