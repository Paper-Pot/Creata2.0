const nav_cont = document.querySelector("#navigation")
const body = document.querySelector("body")
const menuContainer = document.querySelector(".menu_list_container")
const burger = document.querySelector(".burger")
const footer = document.querySelector("footer")

function addingEventListner(listnerElement,addClassToListnerElement = 0, listnerElementClass, addClassTo, Class, listnerType){
    listnerElement.addEventListener(listnerType,function(){
        if(addClassToListnerElement === 1){
            addClassTo.classList.toggle(Class)
            listnerElement.classList.toggle(listnerElementClass)
        }
    })
}

function getDistFromTop(checkElement, addClassTo,topValue,Class){
    window.addEventListener("scroll",function(){
        var topHeight = checkElement.getBoundingClientRect().top
        if(topHeight <= -topValue){
            addClassTo.classList.add(Class)
        }else if(topHeight >= -topValue){
            addClassTo.classList.remove(Class)
        }
    })
    const footer_span = document.createElement("div");
    const footer_span_container = document.createElement("div")

    footer_span.classList.add("footer_span")
    footer_span_container.classList.add("footer_span_container")
    footer_span_container.classList.add("container")

    footer.append(footer_span)
    footer_span.append(footer_span_container)

    footer_span_container.innerHTML = `<p>Made with <img width="25px" src="../res/svg/heart-circle.svg" alt="heart"> from Rhitam</p>`
}
getDistFromTop(body,nav_cont,40,"navigation_scroll");

addingEventListner(burger,1,"burger_rotate",menuContainer,"menu_slide","click")
