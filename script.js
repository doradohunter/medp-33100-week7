/*fetch data from json file*/
function getData() {
    fetch('characters.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const collection = document.querySelector('.collection');
            for (let i = 0; i < data.length; i++) {
                const element = document.createElement('div');
                collection.appendChild(element);
                const character = new Character(element, data[i].icon, data[i].name, data[i].rarity, data[i].vision, data[i].weapon, data[i].nation);
                character.showCharacter();
            }
        })
}

getData();


/*Class for Character*/
class Character {
    constructor(element, icon, name, rarity, vision, weapon, nation) {
        this.element = element;
        this.icon = icon;
        this.name = name;
        this.rarity = rarity;
        this.vision = vision;
        this.weapon = weapon;
        this.nation = nation;

        this.element.classList.add('character');

    }

    showCharacter() {
        this.element.innerHTML = '';

        const iconElement = document.createElement('img');
        iconElement.classList.add('icon');
        iconElement.src = this.icon;

        const nameElement = document.createElement('p');
        nameElement.classList.add('name');
        nameElement.innerText = this.name;

        const rareElement = document.createElement('p');
        rareElement.classList.add('rarity');
        switch (this.rarity) {
            case 5:
                rareElement.innerText = 'Rarity: ★★★★★';
                break;
            case 4:
                rareElement.innerText = 'Rarity: ★★★★';
                break;
            default:
                break;
        }
        //rareElement.innerText = 'Rarity: ' + this.rarity;

        const visionElement = document.createElement('p');
        visionElement.classList.add('vision');
        if (this.name == 'Neuvillette' || this.name == 'Traveler (Lumine/Aether)') {
            visionElement.innerText = 'Element: ' + this.vision;
        } else {
            visionElement.innerText = 'Vision: ' + this.vision;
        }

        const weaponElement = document.createElement('p');
        weaponElement.classList.add('weapon');
        weaponElement.innerText = 'Weapon: ' + this.weapon;

        const nationElement = document.createElement('p');
        nationElement.classList.add('nation');
        nationElement.innerText = 'Nation: ' + this.nation;

        switch (this.vision) {
            case 'Geo':
                this.element.classList.add('geo');
                break;
            case 'Anemo':
                this.element.classList.add('anemo');
                break;
            case 'Pyro':
                this.element.classList.add('pyro');
                break;
            case 'Cryo':
                this.element.classList.add('cryo');
                break;
            case 'Electro':
                this.element.classList.add('electro');
                break;
            case 'Dendro':
                this.element.classList.add('dendro');
                break;
            case 'Hydro':
                this.element.classList.add('hydro');
                break;
            default:
                break;
        }

        this.element.appendChild(iconElement);
        this.element.appendChild(nameElement);
        this.element.appendChild(rareElement);
        this.element.appendChild(visionElement);
        this.element.appendChild(weaponElement);
        this.element.appendChild(nationElement);
    };
};
//const test = new Character (element1, 'test-image.jpg', 'Lottie', 5, 'Hydro', 'Claymore', 'Fontaine');