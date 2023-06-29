function showAlert() {
    alert("¡Hola, esta es una alesta desde JavaScript")
}

const form = document.getElementById("myform")

fuction validateEmail(email) {
    const regex = /^[\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
fuction validateForm() {
    const input = document.getElementById("email")
    const inputValue = input.value

    if(!validateEmail(inputValue)) {
        alert('Por favor ingrese un correo electrónico válido.')
    } else {
        alert('Correo electrónico enviado correctamente.')
    }
}

form.addEventListener("submit", function(lala) {
    lala.preventDefault()
    validateForm();
})

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})