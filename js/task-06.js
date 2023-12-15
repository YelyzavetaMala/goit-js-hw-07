function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.getElementById('controls');
    const input = controls.querySelector('input');
    const createButton = controls.querySelector('[data-create]');
    const destroyButton = controls.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    function createBoxes(amount) {
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    createButton.addEventListener('click', function () {
      const amount = Number(input.value);
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
      } else {
        alert('Please enter a number between 1 and 100');
      }
    });

    destroyButton.addEventListener('click', destroyBoxes);