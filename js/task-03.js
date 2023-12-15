const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', updateName);

    function updateName() {
      const trimmedValue = nameInput.value.trim();
      const outputText = trimmedValue ? trimmedValue : 'Anonymous';
      nameOutput.textContent = outputText;
    }