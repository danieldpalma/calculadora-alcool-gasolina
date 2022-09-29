const btn = document.querySelector('.btn');

const calcular = () => {
  let alcoolInput = document.getElementById('alcool').value;
  let gasolinaInput = document.getElementById('gasolina').value;
  let textResult = document.getElementById('text-result');

  let alcoolSpan = document.getElementById('alcool-result');
  let gasolinaSpan = document.getElementById('gasolina-result');

  /* 
    Calculo
    alcool / gasolina => Se o resultado for menor que 0.7 comepnsa alcool
  */

  let calculo = alcoolInput / gasolinaInput;

  if (calculo < 0.7) {
    textResult.innerHTML = 'Compensa usar Álcool';
  } else {
    textResult.innerHTML = 'Compensa usar Gasolina';
  }

  alcoolSpan.innerHTML = `Alcool R$ ${alcoolInput}`;
  gasolinaSpan.innerHTML = `Gasolina R$ ${gasolinaInput}`;
};

const showResult = (e) => {
  e.preventDefault();
  calcular();
  const result = document.querySelector('.result');

  result.classList.remove('hide');
};

btn.addEventListener('click', showResult);
