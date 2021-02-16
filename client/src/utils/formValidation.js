export function minLengthValidation(inputData, minLength) {
  const { value } = inputData;
  removeClassErrorSucces(inputData);
}

function removeClassErrorSucces(inputData) {
  inputData.classList.remove("success");
  inputData.classList.remove("error");
}
