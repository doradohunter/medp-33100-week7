class Sprite {
    constructor(data) {
        this.name = data.name;
        this.image = data.img;
        this.level = data.level;
    }

    render() {
        const container = document.getElementById('sprite-container');
        const spriteElement = document.createElement('div');
        spriteElement.className = 'sprite';

        const imgElement = document.createElement('img');
        imgElement.src = this.image;
        imgElement.alt = this.name;

        const nameElement = document.createElement('p');
        nameElement.textContent = `${this.name} (${this.level})`;

        spriteElement.appendChild(imgElement);
        spriteElement.appendChild(nameElement);
        container.appendChild(spriteElement);

        gsap.from(spriteElement, { duration: 1, y: 50, opacity: 0, ease: 'power2.out' });
    }
}

// Fetch and Render Data
fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data => {
        data.forEach(digimon => {
            const sprite = new Sprite(digimon);
            sprite.render();
        });
    })
    .catch(error => console.log('Error fetching data:', error));
