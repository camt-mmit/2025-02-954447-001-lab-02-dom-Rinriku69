document.addEventListener('DOMContentLoaded', () => {
  const numberInput = [...document.querySelectorAll('.input-number')];

  numberInput.forEach((elem) =>
    elem.addEventListener('change', () => {
      const result = numberInput.reduce(
        (result, elem) =>
          result + (Number.isNaN(elem.valueAsNumber) ? 0 : elem.valueAsNumber),
        0,
      );

      const numberOuput = document.querySelectorAll('.output-number');
      numberOuput.forEach((elem)=>(elem.textContent = result));
    }),

  );
});
