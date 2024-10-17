// document.getElementById('search-button').addEventListener('click', () => {
//         const characterName = document.getElementById('search').value;
//         fetch(`https://api.attackontitanapi.com/characters/?name=${characterName}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data); // Log the entire response
//                 const characterInfoDiv = document.getElementById('character-info');
//                 characterInfoDiv.innerHTML = ''; // Clear previous results
    
//                 if (data.results.length > 0) {
//                     const char = data.results[0]; // Get the first result
//                     console.log(char.img); // Log the image URL
    
//                     const characterMarkup = `
//                         <h2>${char.name}</h2>
//                         <img src="${char.img}" alt="${char.name}">
//                         <p><strong>Alias:</strong> ${char.alias}</p>
//                         <p><strong>Gender:</strong> ${char.gender}</p>
//                         <p><strong>Age:</strong> ${char.age}</p>
//                         <p><strong>Height:</strong> ${char.height}</p>
//                         <p><strong>Occupation:</strong> ${char.occupation}</p>
//                     `;
//                     characterInfoDiv.insertAdjacentHTML('beforeend', characterMarkup);
//                 } else {
//                     characterInfoDiv.innerHTML = '<p>No character found.</p>';
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching character:', error);
//             });
//     });
    


// async function getCharacter() {

//     try{
//         const disneyName = document.getElementById("disneyCharacter").value.toLowerCase();
//         const response = await fetch(`https://api.disneyapi.dev/character/${disneyName}`);
//         if(!response.ok){
//             throw new Error("Couldn't fetch resource");
//         }

//         const data = await response.json();
//         console.log(data.data[0,1,3].name);
//     }
//     catch(error){
//         console.error(error);
//     }
        
//     // const response = await fetch('https://api.disneyapi.dev/character/');
//     // const data = await response.json();
//     // console.log(data.data);
//     // name_1 = console.log(data.data[0].name);
//     // console.log(data.data[1].name);
//     // console.log(data.data[2].name);
//     // console.log(data.data[3].name);
//     // console.log(data.data[5].name);
//     // console.log(data.data[10]);
// }


//THIS ONE BELOW WORKS
// async function getCharacter() {
//     try {
//         const disneyName = document.getElementById("disneyCharacter").value.toLowerCase();

//         const response = await fetch(`https://api.disneyapi.dev/character`);

//         if (!response.ok) {
//             throw new Error("Couldn't fetch resource");
//         }

//         const data = await response.json();

//         const filteredCharacters = data.data.filter(character => 
//             character.name.toLowerCase().includes(disneyName)
//         );

//         const resultDiv = document.getElementById('characterResults');

//         resultDiv.innerHTML = '';

//         if (filteredCharacters.length > 0) {
//             filteredCharacters.forEach(character => {
//                 const characterElement = document.createElement('p');
//                 console.log(character.name);
//             });
//         } else {
//             console.log(disneyName.toUpperCase(), "was not found");
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }



