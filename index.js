const handleToggle = () => {
    $('.js-toggle-menu').click(e => {
        $('.js-nav-menu').toggleClass('hidden-small');
    });
}

$(handleToggle());

