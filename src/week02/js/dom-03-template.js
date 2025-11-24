function createInputComponent() {
  const numberInput = [...document.querySelectorAll('.input-number')];
  /*  const labelElem = document.createElement('label'); */
  const templateElem = document.querySelector('.number-template');

  if (templateElem) {
    const inputContainer =
      templateElem.content.cloneNode(true).firstElementChild;
    [...inputContainer.querySelectorAll('.box-number')].forEach(
      (elem) => (elem.textContent = `${numberInput.length + 1}`),
    );
    const inputElem = inputContainer.querySelector('.input-number');

    inputElem?.addEventListener('change', () => {
      const numberInput = [...document.querySelectorAll('.input-number')];
      const result = numberInput.reduce(
        (result, elem) =>
          result + (Number.isNaN(elem.valueAsNumber) ? 0 : elem.valueAsNumber),
        0,
      );

      const numberOuput = document.querySelectorAll('.output-number');
      numberOuput.forEach((elem) => (elem.textContent = result));
    });
    const container = document.querySelector('.number-box');
    if (container) {
      container.append(inputContainer);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const addButton = [...document.querySelectorAll('.add-box')];

  addButton.forEach((elem) =>
    elem.addEventListener('click', () => {
      createInputComponent();
    }),
  );
  createInputComponent();
});
