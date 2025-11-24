function createInputComponent() {
  const numberInput = [...document.querySelectorAll('.input-number')];
  const labelElem = document.createElement('label');
  const bElem = document.createElement('b');
  bElem.textContent = `Number ${numberInput.length + 1}`;
  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'number');
  inputElem.classList.add('input-number');

  labelElem.append(bElem);
  labelElem.append(inputElem);

  inputElem.addEventListener('change', () => {
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
    container.append(labelElem);
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
