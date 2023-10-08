var Menuitems = document.getElementById("Menuitems");

Menuitems.style.maxHeight = "0px";

function menutoggle() {

    if (Menuitems.style.maxHeight == "0px") {
        Menuitems.style.maxHeight = "200px"
    }
    else {
        Menuitems.style.maxHeight = "0px"
    }

}

// ----------- product detailes --------

var Productimg = document.getElementById("productimage");

var Smallimg = document.getElementsByClassName("smallimg");

Smallimg[0].onclick = function () {
    Productimg.src = Smallimg[1].src
}

Smallimg[1].onclick = function () {
    Productimg.src = Smallimg[1].src
}

Smallimg[2].onclick = function () {
    Productimg.src = Smallimg[2].src
}

Smallimg[3].onclick = function () {
    Productimg.src = Smallimg[3].src
}