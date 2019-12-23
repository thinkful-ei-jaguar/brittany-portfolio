const handleToggle = () => {
    $('.js-toggle-menu').click(e => {
        $('.js-nav-menu').toggleClass('hidden-small');
    });
}

const handleSmoothScroll = () => {
    $('#lead-down-btn').on('click', e => {
        $('body').animate({
            scrollTop: $('#about-me').offset().top
        }, 500);
    })
}

const bindEventListeners = () => {
    handleToggle();
    handleSmoothScroll();
}

$(bindEventListeners());