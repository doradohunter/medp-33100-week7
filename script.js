fetch('weather.json')
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.getElementById('container');

        //Loop through the weather data and add boxes
        data.weather.forEach(cityWeather => {
            const weatherBox = `
                <div class="weather-box" data-condition="${cityWeather.condition}">
                <div class="condition">${cityWeather.condition}</div>
                    <img src="${cityWeather.icon}" alt="${cityWeather.condition}" class="weather-icon">
                </div>
            `;
            weatherContainer.innerHTML += weatherBox;
        });

        //Load in animation
        gsap.fromTo('.weather-box', 
            {
                y: -50,
                opacity: 0
            }, 
            {
                duration: 1.2, 
                y: 0, 
                opacity: 1, 
                ease: "bounce.out", 
                stagger: 0.2
            }
        );

        //Hover over box
        const weatherBoxes = document.querySelectorAll('.weather-box');
        weatherBoxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                gsap.to(box, {
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

            //Stops hover
            box.addEventListener('mouseleave', () => {
                gsap.to(box, {
                    duration: 0.2,
                    y: 0,
                    ease: "bounce.out"
                });

                const icon = box.querySelector('img');
                gsap.to(icon, {
                    duration: 0,
                    rotation: 0,
                    repeat: 0,
                    y: 0,
                    x: 0,
                    scale: 1
                });
                gsap.killTweensOf(icon);
            });

        });
    });