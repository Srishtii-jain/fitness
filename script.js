const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.classList.add('show-hover-content');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('show-hover-content');
    });
});

const readMoreButtons = document.querySelectorAll('.hover-content button');

readMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const card = button.parentElement.parentElement;

        card.classList.toggle('show-full-content');
    });
});
