const display = () =>{
    document.getElementById("emoji").style.visibility = "visible";
    const collection = document.getElementsByClassName("emoji");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.animation = "popup";
    collection[i].style.animationDuration = "0.45s";
    collection[i].style.animationDelay = `${i*0.07}s`
    }
}
const hide = () =>{
    document.getElementById("emoji").style.visibility = "hidden";
    const collection = document.getElementsByClassName("emoji");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.animation = "";
    }
}
