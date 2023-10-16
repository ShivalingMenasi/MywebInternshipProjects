
const Inputbox = document.getElementById("inputbox");
const Listcontainer = document.getElementById("listcontainer");

function addtask() {
    if (Inputbox.value === '') {
        alert("text is empty");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = Inputbox.value;
        Listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        let icon = document.createElement("icon");
        icon.innerHTML = "\u270E";
        li.appendChild(icon);

   

     }

    Inputbox.value='';
    datasave();
}

Listcontainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("checked");
        datasave();
    }

    else if (e.target.tagName === "SPAN") {

        e.target.parentElement.remove();
        datasave();
    }


    
}, false);

Listcontainer.addEventListener("click",edititem)

function edititem(){
    Inputbox.value=this.parentElement.value;
}

function datasave() {
    localStorage.setItem("data", Listcontainer.innerHTML)
}

function showtask(){
    Listcontainer.innerHTML=localStorage.getItem("data")
}

showtask();