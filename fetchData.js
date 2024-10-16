class Digimon {
    constructor(element, name, img, level) {
        this.element = element;
        this.name = name;
        this.img = img;
        this.level = level;
        this.element.classList.add('digimon');
        if (this.level == 'In Training' || this.level == 'Training'){
            this.element.classList.add('in_training')
        }
        else if (this.level == 'Fresh'){
            this.element.classList.add('fresh')
        }
        else if (this.level == 'Rookie'){
            this.element.classList.add('rookie')
        }
        else if (this.level == 'Champion'){
            this.element.classList.add('champion')
        }
        else if (this.level == 'Armor'){
            this.element.classList.add('armor')
        }
        else if (this.level == 'Ultimate'){
            this.element.classList.add('ultimate')
        }
        else if (this.level == 'Mega'){
            this.element.classList.add('mega')
        }
    }

    renderElement() {
        this.element.innerHTML = '';

        const nameElement = document.createElement('p');
        nameElement.classList.add('digimon_name');
        nameElement.innerText = this.name;

        const imgElement = document.createElement('img');
        imgElement.src = this.img

        const levelElement = document.createElement('p');
        levelElement.classList.add('level');
        levelElement.innerText = 'Level: ' + this.level;

        this.element.appendChild(nameElement);
        this.element.appendChild(imgElement);
        this.element.appendChild(levelElement);
    }
}

async function fetchData() {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    if (response.ok) {
        const data = await response.json();
        return data
    }
    return [];
}

fetchData()
    .then((data) => {
        const holder = document.querySelector('.holder');

        for (let i = 0; i < data.length; i++) {
            const digimonEl = document.createElement('div');
            const digimonElement = new Digimon(digimonEl, data[i].name, data[i].img, data[i].level);
            console.log(data.length)
            digimonElement.renderElement();
            holder.appendChild(digimonEl);
        }
    })