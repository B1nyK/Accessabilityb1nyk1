// JavaScript for Text-to-Speech
const sayItButton = document.getElementById('sayItButton');
const messageBox = document.getElementById('messageBox');

sayItButton.addEventListener('click', () => {
    const text = messageBox.value;
    if (text.trim() === '') {
        alert('Please enter a message to say.');
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
});
