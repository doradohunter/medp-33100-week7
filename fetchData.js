import Character from './displayData.js';

document.addEventListener('DOMContentLoaded', () => {
    fetch('character.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.characters-list');
            data.forEach(characterData => {
                const character = new Character(characterData.name, characterData.vision, characterData.description);
                character.displayCharacter(container);
            });
        })
        .catch(error => console.error('Error fetching character data:', error));
});
