var images = document.querySelectorAll('.gallery-imgs img')
var previous = document.querySelector('.previous')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery_inner img')
var cover = document.querySelector('.cover')
var currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        previous.classList.add('hide')
    }
    else {
        previous.classList.remove('hide')
    }

    if (currentIndex == images.length - 1) {
        next.classList.add('hide')
    }
    else {
        next.classList.remove('hide')
    }

    galleryImg.src = images[currentIndex].src
    cover.classList.add('show')
}


images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', function () {
    cover.classList.remove('show')
})

previous.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--
        showGallery()
    }

})

next.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++
        showGallery()
    }
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27){
        cover.classList.remove('show')
    }
})

