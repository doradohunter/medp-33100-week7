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
  const response = getJoke.json();

  try {
    return response;
  } catch {
    return 'error';
  }
}

function jokeDivs() {
  const typeDiv = document.createElement('div');
  const setupDiv = document.createElement('div');
  const punchlineDiv = document.createElement('div');

  return { typeDiv, setupDiv, punchlineDiv };
}

function displayJoke() {
  const jokeContainer = document.getElementById('all-joke-container');

  getJoke().then((data) => {
    data.forEach((each) => {
      const div = document.createElement('div');
      const newJoke = new Jokes(each.type, each.setup, each.punchline);

      jokeContainer.appendChild(div);

      for (let i = 0; i < 3; i++) {
        div.appendChild(Object.entries(jokeDivs())[i][1]);
      }
    });
  });
}

displayJoke();
