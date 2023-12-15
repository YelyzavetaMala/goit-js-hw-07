const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('#name-output');

    nameInput.addEventListener('input', updateName);

    function updateName() {
      const trimmedValue = nameInput.value.trim();
      const outputText = trimmedValue ? trimmedValue : 'Anonymous';
      nameOutput.textContent = outputText;
    }