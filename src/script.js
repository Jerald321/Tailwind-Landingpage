console.log("hello world");

function menuclick(){
    let menu =document.getElementById("mobileMenu")
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
        
    }
    else{
        menu.classList.add("hidden")
    }
}

