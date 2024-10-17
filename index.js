class Jokes {
  constructor(type, setup, punchline) {
    this.type = type;
    this.setup = setup;
    this.punchline = punchline;
  }

  announceType() {
    return `Joke type: ${this.type}`;
  }
}

async function getJoke() {
  const getJoke = await fetch(
    'https://official-joke-api.appspot.com/jokes/random/10'
  );
  const response = await getJoke.json();

  try {
    return response;
  } catch {
    return 'error';
  }
}

const jokeId = ['type', 'setup', 'punchline'];

function jokeDivs() {
  const typeDiv = document.createElement('div');
  const setupDiv = document.createElement('div');
  const punchlineDiv = document.createElement('div');

  return { typeDiv, setupDiv, punchlineDiv };
}

function displayJoke() {
  const jokeContainer = document.getElementById('all-joke-container');

  jokeContainer.textContent = 'loading';

  getJoke().then((data) => {
    jokeContainer.textContent = '';
    data.forEach((each) => {
      const div = document.createElement('div');
      const newJoke = new Jokes(each.type, each.setup, each.punchline);
      jokeContainer.appendChild(div);

      for (let i = 0; i < 3; i++) {
        const jokeArray = Object.entries(jokeDivs());
        jokeArray[i][1].classList.add(jokeId[i]);

        i == 0
          ? (jokeArray[i][1].textContent = newJoke.announceType())
          : i == 1
          ? (jokeArray[i][1].textContent = newJoke.setup)
          : (jokeArray[i][1].textContent = newJoke.punchline);

        div.appendChild(jokeArray[i][1]);
      }
    });

    setupGSAPAnimation();
  });
}

function setupGSAPAnimation() {
  const jokeElements = document.querySelectorAll('#all-joke-container > div');
  let currentIndex = 0;

  gsap.set(jokeElements, { opacity: 0, x: '100%' });
  gsap.set(jokeElements[0], { opacity: 1, x: 0 });

  function goToJoke(index) {
    gsap.to(jokeElements[currentIndex], {
      opacity: 0,
      x: index > currentIndex ? '-100%' : '100%',
      duration: 0.5,
    });
    gsap.fromTo(
      jokeElements[index],
      { opacity: 0, x: index > currentIndex ? '100%' : '-100%' },
      { opacity: 1, x: 0, duration: 0.5 }
    );

    currentIndex = index;
  }

  function nextJoke() {
    const nextIndex = (currentIndex + 1) % jokeElements.length;
    goToJoke(nextIndex);
  }

  function prevJoke() {
    const prevIndex =
      (currentIndex - 1 + jokeElements.length) % jokeElements.length;
    goToJoke(prevIndex);
  }

  function ifClickButton() {
    const prevButton = document.querySelector('.previous');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', prevJoke);
    nextButton.addEventListener('click', nextJoke);
  }

  ifClickButton();
}

displayJoke();
