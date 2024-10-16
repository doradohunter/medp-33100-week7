class Tea {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

function displayTea(teaList) {
    const teaContainer = document.getElementById('tea-container'); 
    
    teaList.forEach((teaItem, index) => {
        const tea = new Tea(teaItem.name, teaItem.description);

        const teaElement = document.createElement('div');
        teaElement.classList.add('tea-item');

        const teaName = document.createElement('h2');
        teaName.textContent = tea.name;

        const teaDescription = document.createElement('p');
        teaDescription.textContent = tea.description;

        teaElement.appendChild(teaName);
        teaElement.appendChild(teaDescription);

        // Delay the appearance of each tea item for a staggered effect
        setTimeout(() => {
            teaElement.style.opacity = '1';
            teaElement.style.transform = 'translateY(0)';
        }, index * 150); // Delay based on index

        teaContainer.appendChild(teaElement);
    });
}

function fetchData() {
    return fetch('tea.json') 
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            displayTea(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

fetchData();
