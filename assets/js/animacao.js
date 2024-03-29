const observer = new IntersectionObserver(entries => {
    console.log(entries)

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 0.2) {
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: [0, 0.5, 1]
})
Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})