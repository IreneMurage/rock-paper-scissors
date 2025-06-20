// event listener (call back)
//access the element
const nameInput = document.getElementById("name-input");
console.log(nameInput)


nameInput.addEventListener("input", nameInputHasChanged);

function nameInputHasChanged() {
  //   console.log(NameInput);
  let nameValue = document.getElementById("name-input").value;
  let pSubmit = document.querySelector("#submit-button");
  if (nameValue.length >= 4) {
    // when the value name >4

    pSubmit.innerHTML = `<button>Submit</button>`;
    return;
  }
  pSubmit.innerHTML = ``;
}