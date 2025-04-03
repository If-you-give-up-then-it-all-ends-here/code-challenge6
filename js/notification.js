
const read = document.getElementById("read");
const count = document.getElementById("count");
const bg = document.querySelectorAll(".bg");
const unread = document.querySelectorAll(".message__content--unread");



read.addEventListener("click", ()=>{
    count.textContent = "0";
    bg.forEach((message)=>{
        message.classList.add("bg-read");
    })
    unread.forEach((mark)=>{
        mark.classList.add("message__content--unread-read");
    })
});