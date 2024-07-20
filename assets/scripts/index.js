document.addEventListener('DOMContentLoaded', function () {
    const deviceSize = window.innerWidth;
    const logoImg = document.getElementById("logo");
    const logo2Img = document.getElementById("logo2");
    const bannerImg = document.getElementById("banner__img");
    // if (deviceSize < 768) {
    //     bannerImg.src = "./assets/images/smallBanner.png"
    // } else {
    //     bannerImg.src = "./assets/images/bigBanner.png"
    // }
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
    window.addEventListener('resize', function (e) {
        if (window.innerWidth < 768) {
            bannerImg.src = "assets/images/smallBanner.png"
        }
        else {
            bannerImg.src = "/assets/images/bigBanner.png"
        }
    })
    AOS.init();
})

