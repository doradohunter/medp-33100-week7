async function getJoke() {
  const getJoke = await fetch(
    'https://official-joke-api.appspot.com/jokes/random'
  );
  const response = getJoke.json();

  try {
    return response;
  } catch {
    return 'error';
  }
}

function displayJoke() {
  const heading = document.querySelector('h1');

  heading.addEventListener('click', () => {
    getJoke().then((data) => console.log(data));
  });
}

displayJoke();
