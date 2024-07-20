document.addEventListener('DOMContentLoaded', function () {
    const deviceSize = window.innerWidth;
    const logoImg = document.getElementById("logo");
    const logo2Img = document.getElementById("logo2");
    const form = document.getElementById("form");
    if (logoImg) {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 100) {
                logoImg.classList.add("logo-hide")
                logo2Img.classList.remove("logo-hide")
            } else {
                logoImg.classList.remove("logo-hide")
                logo2Img.classList.add("logo-hide")
            }
        })
    }
    form.addEventListener("submit", e => {
        e.preventDefault()
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const formLog = document.querySelector('.form__log')
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                formLog.classList.add('success');
                formLog.innerHTML = "Message sent successfully"
            })
            .catch(error => {
                formLog.classList.add('error');
                formLog.innerHTML = "Error Occurred"
            });

    })
    AOS.init();

})

