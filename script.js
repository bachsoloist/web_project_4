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

function popupHandler (popup) {
    popup.classList.toggle('edit-profile_open');
}

function formSubmitHandler (event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popupHandler (editProfile);
}

function resetValue () {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

setDefaultInputValue();

profileEditButton.addEventListener("click", function() {
    popupHandler (editProfile);
});
editProfile.addEventListener('submit', formSubmitHandler); 
closeButton.addEventListener("click", function() {
    resetValue();
    popupHandler (editProfile);
});








