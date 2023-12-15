//Xử lý các ô input
const inputs = document.querySelectorAll('.contact-form-line input[type="text"], .contact-form-line input[type="email"]');
  Array.from(inputs).forEach((input) => {
    const placeholder = input.placeholder
    const elParrent = input.closest('.contact-form-line')

    //Change color button clear
    input.addEventListener('input', () => {
        if (input.value.length) {
            elParrent.classList.add('input-focus')
            return true
        }
        elParrent.classList.remove('input-focus')
    })

    //Focus on input
    input.addEventListener('focus', () => {
        input.placeholder = ""
    })

    input.addEventListener('focusout', () => {
        input.placeholder = placeholder
    })

    //Click clear input
    const buttonClear = elParrent.querySelector('.clear-input')
    buttonClear.addEventListener('click', () => {
        input.value = ''
        elParrent.classList.remove('input-focus')
        input.focus()
    })
});

const textareaInputs = document.querySelectorAll('.contact-form-line textarea');
Array.from(textareaInputs).forEach((textarea) => {
  const placeHolder = textarea.placeholder;
  textarea.addEventListener('focus', function(){
    textarea.placeholder = ""
  })

  textarea.addEventListener('focusout', function(e) {
    textarea.placeholder = placeHolder
  })
})