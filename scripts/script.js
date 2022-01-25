// const profileOpenPopupButton = document.querySelector('.edit-button')
// const popup = document.querySelector('.popup')
// const popupCloseButton = document.querySelector('.popup__close')


// console.log(profileOpenPopupButton)



function openPopup() {
  document.getElementById('ID_popup').classList.add('popup_activ');
}

function closePopup() {
  document.getElementById('ID_popup').classList.remove('popup_activ');
}

profileButtonEdit.addEventListener('click', openPopup);
profileButtonClose.addEventListener('click', closePopup);





// function closePopup() {
//   popap.classList.remove('popup__opened);
// }


