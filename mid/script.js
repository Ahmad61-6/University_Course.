let button = document.querySelector("button");

let body = document.querySelector("body");
let theme = "light";

function changeTheme(){
    if(theme === "light"){
        theme = "black";
        body.classList.add("dark");
    }
    else{
        theme = "light";
        body.classList.add("light");
    }
}

button.addEventListener("click", changeTheme);