const display = () =>{
    document.getElementById("emoji").style.visibility = "visible";
    const collection = document.getElementsByClassName("emoji");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.animation = "popup";
    collection[i].style.animationDuration = "0.3s";
    collection[i].style.animationDelay = `${i*0.05}s`
    }
}
const hide = () =>{
    document.getElementById("emoji").style.visibility = "hidden";
    const collection = document.getElementsByClassName("emoji");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.animation = "";
    }
}
