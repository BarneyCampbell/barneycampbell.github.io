let shownCard, hiddenCards;

window.onload = () => {
    const root = document.documentElement;
 
    document.addEventListener('mousemove', evt => {
        let x = evt.clientX / innerWidth;
        let y = evt.clientY / innerHeight;
    
        root.style.setProperty('--mouse-x', x);
        root.style.setProperty('--mouse-y', y);
    });

    shownCard = document.getElementById('extra');
    hiddenCards = [document.getElementById('secret'), document.getElementById('top-secret')];



    document.getElementById('cardForward').onclick = () => cardChange(true);
    document.getElementById('cardBack').onclick = () => cardChange(false);
};

const cardChange = (direction) => {
    if(direction) {
        shownCard.classList.add('hidden');
        hiddenCards.push(shownCard);

        shownCard = hiddenCards.shift();
        shownCard.classList.remove('hidden');
    }
    else {
        shownCard.classList.add('hidden');
        hiddenCards.unshift(shownCard);

        shownCard = hiddenCards.pop();
        shownCard.classList.remove('hidden');
    }
}