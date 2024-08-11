document.addEventListener('click', function(event) {
    const accordian = document.querySelector('.accordian');
    const radioButtons = accordian.querySelectorAll('input[type="radio"]');
    let isClickInside = accordian.contains(event.target);

    if (!isClickInside) {
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
    }
});
