(function() {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return
        
        const opened = document.body.classList

        if (!opened.contains('body--opened-menu')) {
            opened.add('body--opened-menu')
        } else {
            opened.remove('body--opened-menu')
        }

    }

})()



