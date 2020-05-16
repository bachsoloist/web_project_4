const profileEditButton = document.querySelector(".profile__edit-button");
const editProfile = document.querySelector(".edit-profile");
const closeButton = document.querySelector(".edit-profile__close-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".edit-profile__name");
const inputAbout = document.querySelector(".edit-profile__occupation");

function setDefaultInputValue () {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

function popupOpen (popup) {
    popup.style.display = "block";
}

function formSubmitHandler (event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    editProfile.style.display = "none";
}

function resetValue () {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

function closePopup () {
    resetValue();
    editProfile.style.display = "none";
}

setDefaultInputValue();

profileEditButton.addEventListener("click", function() {
    popupOpen(editProfile);
});
editProfile.addEventListener('submit', formSubmitHandler); 
closeButton.addEventListener("click", closePopup);








