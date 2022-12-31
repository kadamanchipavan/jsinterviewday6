function change(){
    let s=document.getElementById('newtext')
    s.style.color="black"
    s.innerText="MERN STACK"
}

//2Q
let b = document.getElementsByTagName("h1")
console.log(b)
//3Q

function time(){
    let dt=new Date();
    let hr=dt.getHours();
    let mm=dt.getMinutes();
    let si=dt.getSeconds();
    document.getElementById("hrs").innerText=hr;
    document.getElementById("min").innerText=mm;
    document.getElementById("sec").innerText=si;
    setTimeout(time,1000)

}
time()

//4Q
function replacet(){
    let s = document.getElementById("replace")
    s.style.color="green";
    s.innerText="Welcome to Elevation Academy"
}
//5Q
function hiddentext(){
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
