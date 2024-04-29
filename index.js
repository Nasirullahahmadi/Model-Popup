const popupBtn = document.getElementById("button");
const closePopup = document.getElementById("popupClose");

popupBtn.addEventListener("click", ()=> {
    document.querySelector(".popupContainer").classList.add("showPopup");
})

closePopup.addEventListener("click", ()=> {
    document.querySelector(".popupContainer").classList.remove("showPopup");
})