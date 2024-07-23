// alert("Welcome to my website")
// popup js start
var btn=document.getElementById("btn")
var  form=document.getElementById("form")
var icn=document.getElementById("icn")
var frm=document.getElementById("frm")
function set(){
    form.style.display="block"
}
setTimeout(set,5000)
icn.addEventListener("click",out)
function out(){
    form.style.display="none"
}
clearTimeout(out)
btn.addEventListener("click" ,()=>{
    
    frm.innerHTML ="your value is submitted"
})


// popup js end

// index slider js start


var img=document.getElementById("img")
var image=[
    "doctor1.jpg",
    "doctor2.jpg",
    "doctor3.jpg",
    "doctor4.jpg"
]
currentIndex=0;

function updateslider(){
img.src=image[currentIndex]


}
updateslider()
next.addEventListener("click",()=>{
    clearInterval(slideShow);
    currentIndex=(currentIndex+1)%image.length;
    updateslider()

})
prev.addEventListener("click",()=>{
    clearInterval(slideShow);
    currentIndex=(currentIndex-1+image.length)%image.length;
    updateslider()
})


var slideShow = setInterval(()=>{
    currentIndex=(currentIndex+1)%image.length;
    updateslider()
}, 5000)


// index slider js end