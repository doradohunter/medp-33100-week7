class Character{
    constructor(element, name, house, wizard){
        this.element = element;
        this.name = name;
        this.house = house;
        this.wizard = wizard;

        
    }

    createCharacter(){
        this.innerHTML = '';

        const nameElement = document.createElement('p');
        nameElement.classList.add('character_name');
        nameElement.innerHTML = 'Name: '+ this.name;

        const houseElement = document.createElement('p');
        houseElement.classList.add('character_house');
        houseElement.innerText = 'House: ' + this.house;

        const wizardElement = document.createElement('p');
        wizardElement.classList.add('character_wizard');
        wizardElement.innerText = 'Is A Wizard: '+ this.wizard;

        this.element.appendChild(nameElement);
        this.element.appendChild(houseElement);
        this.element.appendChild(wizardElement);

    }
}

async function fetchCharacterData(){
    const response = await fetch('https://hp-api.herokuapp.com/api/characters');
    if (response.ok){
        const data = await response.json();
        console.log(data);
        return data;
    }
    return [];
}

fetchCharacterData()
    .then((data) =>{
        const characters = document.querySelector('.characters');

        for(let i = 0; i < 30; i++){
            const characterEl = document.createElement('div');
            characterEl.classList.add('character');
            const character = new Character(characterEl, data[i].name, data[i].house, data[i].wizard);
            character.createCharacter();
            characters.appendChild(characterEl);
        }
    })
