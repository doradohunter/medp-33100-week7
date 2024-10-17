class Character {
    constructor(name, vision, description) {
        this.name = name;
        this.vision = vision.toLowerCase(); 
        this.description = description;
    }

    getVisionClass() {
        switch (this.vision) {
            case 'anemo':
                return 'anemo';
            case 'pyro':
                return 'pyro';
            case 'cryo':
                return 'cryo';
            case 'dendro':
                return 'dendro';
            case 'geo':
                return 'geo';
            case 'electro':
                return 'electro';
            case 'hydro':
                return 'hydro';
            default:
                return '';
        }
    }

    displayCharacter(container) {
        const charDiv = document.createElement('div');
        charDiv.classList.add('container', this.getVisionClass());

        const nameEl = document.createElement('p');
        nameEl.classList.add('char_name');
        nameEl.textContent = this.name;

        const visionEl = document.createElement('p');
        visionEl.classList.add('char_vision');
        visionEl.textContent = `Vision: ${this.vision.charAt(0).toUpperCase() + this.vision.slice(1)}`;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('char_description');
        descriptionEl.textContent = this.description;

        charDiv.appendChild(nameEl);
        charDiv.appendChild(visionEl);
        charDiv.appendChild(descriptionEl);

        container.appendChild(charDiv);
    }
}

export default Character;
