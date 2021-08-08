const form = document.getElementById('form')
const input = document.getElementById('text')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  check()
})

function check() {
  const inputValue = input.value.trim()
  const formGrp = input.parentElement
  const small = formGrp.querySelector('small')

  if (inputValue === '') {
    formGrp.classList = 'form-grp error'
    small.innerHTML = 'Whoops! It looks like you forgot to add your email'
  } else if (!checkEmail(inputValue)) {
    formGrp.classList = 'form-grp error'
    small.innerHTML = 'Please provide a valid email address'
  } else {
    formGrp.classList = 'form-grp'
    small.innerHTML = ''
  }
}

function checkEmail(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
}
