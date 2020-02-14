const buttonText = [
    {
        text: 'O co chodzi z programem Polska bezgotówkowa',
        text2:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        text: 'Kto może odebrać terminal za darmo ?',
        text2:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        text: 'Na ile zawierana jest umowa',
        text2:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        text: 'Ile terminali mogę odebrać w porgramie ?',
        text2:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        text: 'Ile terminali mogę odebrać w porgramie ?',
        text2:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        text: 'A co jeśli w mojej firmie był juz terminal',
        text2:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

const box = document.getElementsByClassName('box-button');

buttonText.forEach(text => {
    document.querySelector('.questions__box').insertAdjacentHTML(
        'afterbegin',
        `<span class="box-button">
            <span class="box-button__elipse"><span class="box-button__plus">+</span><span class="box-button__minus">-</span></span>
            <span>${text.text}</span>
        </span>
        <div class="box-button__content">
            <p class="box-button__content-text">
                ${text.text2}
            </p>
        </div>`,
    );
});

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let boxContent = this.nextElementSibling;
        let plus = this.childNodes[1].childNodes[0];
        let minus = this.childNodes[1].childNodes[1];
        if (boxContent.style.display === 'block') {
            boxContent.style.display = 'none';
            plus.style.display = 'block';
            minus.style.display = 'none';
        } else {
            boxContent.style.display = 'block';
            plus.style.display = 'none';
            minus.style.display = 'block';
        }
    });
}
