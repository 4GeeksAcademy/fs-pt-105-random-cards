window.addEventListener('DOMContentLoaded', () => {

    const suits = {
        1: "♦",
        2: "♥",
        3: "♠",
        4: "♣"
    }
    const specialLetters = {
        1: "A",
        11: "J",
        12: "Q",
        13: "K"
    }
    const randomNumber = () => Math.floor(Math.random() * 13) + 1;
    const randomSuits = () => Math.floor(Math.random() * 4) + 1;
    const identifierNumber = (item) => {
        return specialLetters[item] || item;
    }
    const identifierColor = (item) => {
        const elements = document.querySelectorAll('.color')
        const isRed = suits[item] === suits[1] || suits[item] === suits[2];
        elements.forEach(el => {
            el.classList.remove('red', 'black');
            el.classList.add(isRed ? 'red' : 'black');
        });
    }

    const changeCard = () => {
        let suit = randomSuits();
        let number = randomNumber();
        document.querySelectorAll('#upper-suits,#lower-suits').forEach((item) => {
            item.innerHTML = suits[suit];
            identifierColor(suit);
        });
        document.querySelector('#card-number').innerHTML = identifierNumber(number);
    }
    changeCard();


    const cardSize = () => {
        const vertical = document.querySelector('#vertical-input').value;
        const horizontal = document.querySelector('#horizontal-input').value;
        const card = document.querySelector('#poker-card');
        card.style.height = `${vertical}px`;
        card.style.width = `${horizontal}px`;
    }

    document.querySelector('#vertical-input').addEventListener('input', cardSize);
    document.querySelector('#horizontal-input').addEventListener('input', cardSize);
    document.querySelector('#change-button').addEventListener('click', changeCard);



    const countdownNumber = document.querySelector('.countdown-number');
    let secondsOfWaiting = 10;
    const reinicio = () => {
        const countdown = setInterval(() => {
            countdownNumber.textContent = secondsOfWaiting;
            secondsOfWaiting--;
            if (secondsOfWaiting < 0) {
                clearInterval(countdown);
                changeCard();
                secondsOfWaiting = 10;
                reinicio();
            }

        }, 1000)
    }
    reinicio();
})