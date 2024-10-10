class holySpeech {
    constructor(element, book, verse, text){
        this.element = element;
        this.book = book;
        this.verse = verse;
        this.text = text;

        this.element.classList.add('speech')
    }

    blessedWords() {
        this.element.innerHTML = '';

        const bookElement = document.createElement('b');
        bookElement.classList.add('verse');
        bookElement.innerText = this.book + ': ';
        
        const verseElement = document.createElement('b');
        verseElement.classList.add('verse');
        verseElement.innerText = this.verse;
    
        const textElement = document.createElement('p');
        textElement.innerText = this.text;
    
        this.element.appendChild(bookElement);
        this.element.appendChild(verseElement);
        this.element.appendChild(textElement);
    }
}



function spoke() {
    fetch('https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10')
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then(data => {
            // console.log(data.verses);
            const holySpeechElement =  document.querySelector('.holySpeech') 
            for (let i = 0; i < data.verses.length; i++){
                const speechElement = document.createElement('div');
                holySpeechElement.appendChild(speechElement);
                const speech1 = new holySpeech(speechElement, data.verses[i].book_name, data.verses[i].chapter + ':' + data.verses[i].verse, data.verses[i].text)
                speech1.blessedWords()
            }
        })
}
spoke()