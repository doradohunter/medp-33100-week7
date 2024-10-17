class Character {
    constructor(element, name, level, imagChar) {
        this.element = element;
        this.name = name;
        this.level = level;
        this.imagChar = imagChar;
    }

    displayCharacter() {

        const imagElement = document.createElement('img');
        imagElement.src = this.imagChar;
        imagElement.alt = this.name;

        const nameElement = document.createElement('p');
        nameElement.classList.add('digi_name');
        nameElement.innerText = 'Name: ' + this.name;

        const levelElement = document.createElement('p');
        levelElement.classList.add('digi_level');
        levelElement.innerText = 'Level: ' + this.level;


        this.element.appendChild(nameElement);
        this.element.appendChild(levelElement);
        this.element.appendChild(imagElement);

        console.log(this.element);
    }

}

async function getCharacterData(){
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    if (response.ok){
        const data = await response.json();
        console.log(data);
        return data;
    }
    return [];
}

getCharacterData()
    .then((data) =>{
        const library = document.querySelector('.library');

        for(let i = 0; i < 20; i++){
            const digiEl = document.createElement('div');
            digiEl.classList.add('character');
            const character = new Character(digiEl, data[i].name, data[i].level, data[i].img);
            character.displayCharacter();
            library.appendChild(digiEl);
        }
    })
const libraryElement = document.querySelector('.library');