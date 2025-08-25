const welcomeButton = document.getElementById('welcomeButton');
const welcomeContainer = document.getElementById('welcomeContainer');

welcomeButton.addEventListener('click', () => {
    welcomeContainer.classList.add('welcomeContainerHidden');
});