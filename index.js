class CreateJoke {
  constructor(type, setup, punchline) {
    this.type = type;
    this.setup = setup;
    this.punchline = punchline;
  }

  getType() {
    return 'Joke type: ' + this.type;
  }
}

async function getJoke() {
  const getJoke = await fetch(
    'https://official-joke-api.appspot.com/random_joke'
  );
  const response = await getJoke.json();

  try {
    return response;
  } catch {
    return 'no response';
  }
}

getJoke()
  .then((data) => {
    const createJoke = new CreateJoke(data.type, data.setup, data.punchline);

    console.log(createJoke.getType());
    console.log(createJoke.setup);
    console.log(createJoke.punchline);
  })
  .catch((error) => {
    throw new Error(error);
  });
