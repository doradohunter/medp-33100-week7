// Used Youtube and Chatgpt for help
function fetchRandomDogImage() {
  const url = "https://random.dog/woof.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const dogImageContainer = document.getElementById("dog-image-container");
      dogImageContainer.innerHTML = ""; // Clear the container

      // Create an img element and set its source to the random dog image URL
      const imgElement = document.createElement("img");
      imgElement.classList.add("dog-image");
      imgElement.src = data.url;

      // Append the image to the container
      dogImageContainer.appendChild(imgElement);
    })
    .catch((error) => console.error("Error fetching the image:", error));
}

document
  .getElementById("new-dog")
  .addEventListener("click", fetchRandomDogImage);

fetchRandomDogImage();
