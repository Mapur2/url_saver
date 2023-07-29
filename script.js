const bsave=document.getElementById("save")
const UL=document.getElementById("ul")
let arr=[]
let leads=JSON.parse(localStorage.getItem("arr"))
if(leads)
{
    arr=leads
    print()
}
document.getElementById("tab").addEventListener("click",function (params) {
    
    chrome.tabs.query({active:true,currentWindow:true},function (tabs) {
        arr.push(tabs[0].url)
    localStorage.setItem("arr",JSON.stringify(arr))
    print()
    })
})
bsave.addEventListener('click',function (params) {
    var tg=document.getElementById("input")
    var text=tg.value;
   // console.log(text)
    tg.value=""
       if(text!="")
        {    arr.push(text);
            localStorage.setItem("arr",JSON.stringify(arr))
            print()
            console.log(localStorage.getItem("arr"))
        }
   })

function print()
{
    var list=""
    for (let index =  arr.length-1; index >=0; index--) {
        list+=`<li>
            <a href='${arr[index]}' target="blank">${arr[index]}
            </a>
            </li>`
    }
UL.innerHTML=list
}
var del=document.getElementById("clear").addEventListener('click',function () {
    arr.length=0
    localStorage.clear()
        print()
})