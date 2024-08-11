function isMobile() {
    return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

// Only run the script if the device is not mobile
if (!isMobile()) {

    var elemc = document.querySelector("#work-list")
    var fixed = document.querySelector("#fixed-image")
    elemc.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemc.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elem1 = document.querySelector("#elem1")
    var elem2 = document.querySelector("#elem2")
    var elem3 = document.querySelector("#elem3")

    var elems = document.querySelectorAll(".work-elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })

    fixed.style.pointerEvents = "none";
}