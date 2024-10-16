class Weather {
    constructor(condition, icon) {
        this.condition = condition;
        this.icon = icon;
    }

    //Sets up the box
    createWeatherBox() {
        const weatherBox = document.createElement('div');
        weatherBox.classList.add('weather-box');
        weatherBox.setAttribute('data-condition', this.condition);

        const conditionElement = document.createElement('div');
        conditionElement.classList.add('condition');
        conditionElement.textContent = this.condition;

        const iconElement = document.createElement('img');
        iconElement.src = this.icon;
        iconElement.alt = this.condition;
        iconElement.classList.add('weather-icon');

        weatherBox.appendChild(conditionElement);
        weatherBox.appendChild(iconElement);

        return weatherBox;
    }

    HoverEffects(weatherBox) {
        const icon = weatherBox.querySelector('img');

        weatherBox.addEventListener('mouseenter', () => {
            gsap.to(weatherBox, {
                duration: 0.2,
                y: -20,
                ease: "bounce.out"
            });

        //Check for condition
        if (box.getAttribute('data-condition') === 'Clear') {
            const icon = box.querySelector('img');
            gsap.to(icon, {
                duration: 2,
                rotation: 360,
                repeat: -1,
                ease: "linear"
            });
        }
        else if (box.getAttribute('data-condition') === 'Clouds') {
            const icon = box.querySelector('img');
            gsap.to(icon, {
                duration: 0.5,
                y: -20,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });                    
        }
        else if (box.getAttribute('data-condition') === 'Rain') {
            const icon = box.querySelector('img');
            gsap.to(icon, {
                duration: 0.5,
                ease: "power1.inOut",
                scale: 1.2,
                repeat: -1,
                yoyo: true
            });                   
        }
        else if (box.getAttribute('data-condition') === 'Snow') {
            const icon = box.querySelector('img');
            gsap.to(icon, {
                duration: 0.5,
                ease: "power1.inOut",
                scaleY: 1.25,
                scale: 0.8, 
                repeat: -1,
                yoyo: true 
            });                  
        }
        else if (box.getAttribute('data-condition') === 'Tornado') {
            const icon = box.querySelector('img');
            gsap.fromTo(icon, 
                { x: -5 },
                { 
                    x: 5,
                    duration: 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                }
            );    
        }      
        });

        // Remove hover effects on mouse leave
        weatherBox.addEventListener('mouseleave', () => {
            gsap.to(weatherBox, {
                duration: 0.2,
                y: 0,
                ease: "bounce.out"
            });

            gsap.killTweensOf(icon);
            gsap.to(icon, {
                duration: 0,
                rotation: 0,
                y: 0,
                x: 0,
                scale: 1
            });
        });
    }
}

//Fetch
function fetchWeatherData() {
    return fetch('weather.json')
        .then(response => response.json())
        .catch(error => console.error('Error fetching weather data:', error));
}

//Create boxes
function createWeatherBoxes(data) {
    const weatherContainer = document.getElementById('container');

    data.forEach(cityWeather => {
        const weather = new Weather(cityWeather.condition, cityWeather.icon);
        const weatherBox = weather.createWeatherBox();
        weather.HoverEffects(weatherBox);
        weatherContainer.appendChild(weatherBox);
    });

    //Load in animation
    gsap.fromTo('.weather-box', {
        y: -50,
        opacity: 0
    }, {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        stagger: 0.2
    });
}

fetchWeatherData().then(data => {
    createWeatherBoxes(data);
});