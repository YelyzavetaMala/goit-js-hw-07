const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = {};
      let hasEmptyField = false;

      for (const element of loginForm.elements) {
        if (element.type !== 'submit' && element.type !== 'fieldset') {
          const value = element.value.trim();
          formData[element.name] = value;

          if (value === '') {
            hasEmptyField = true;
          }
        }
      }

      if (hasEmptyField) {
        alert('All form fields must be filled in');
      } else {
        console.log(formData);
        loginForm.reset();
      }
    });
