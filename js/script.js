const wrapper = document.querySelector('.wrapper')
const img = document.querySelector('.wrapper img')

wrapper.addEventListener('mousemove', (e) => {
    const parah = Math.floor(e.offsetX * 0.4)

    img.animate({
        objectPosition : `${parah}% 0`
    }, {
        duration : 1500, fill : "forwards"
    })
})

wrapper.addEventListener('touchmove', (e) => {
    const parah = Math.floor(e.offsetX * 0.4)

    img.animate({
        objectPosition : `${parah}% 0`
    }, {
        duration : 1500, fill : "forwards"
    })
})