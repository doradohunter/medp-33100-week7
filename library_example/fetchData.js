class PhilosophyQuote {
    constructor(element, quotation, author, type) {
        this.element = element;
        this.quotation = quotation;
        this.author = author;
        this.type = type;
    }

    renderElement() {
        this.element.innerHTML = '';

        const quoteElement = document.createElement('p');
        quoteElement.classList.add('quote');
        quoteElement.innerText = '"' + this.quotation + '"';
        this.element.appendChild(quoteElement);

        const authorElement = document.createElement('p');
        authorElement.classList.add('author');
        authorElement.innerText = '- ' + this.author;
        this.element.appendChild(authorElement);
        
    }
}

async function fetchApiData() {
    const response = await fetch('https://philosophy-quotes-api.glitch.me/quotes');
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
    }
    return [];
}

fetchApiData()
    .then((data) => {
        const slideshow = document.querySelector('.quote-slideshow');
        let index = 0;
        
        function displayQuote(){
            slideshow.innerHTML = '';
            const quoteEl = document.createElement('div');
            const quote = new PhilosophyQuote(quoteEl, data[index].quote, data[index].source, data[index].philosophy);
            quote.renderElement();
            slideshow.appendChild(quoteEl);

            gsap.fromTo(quoteEl,{opacity: 0},{
                opacity: 1, 
                    duration: 2,
                    onComplete: function (){
                        if (index >= data.length){
                            index = 0;
                        }
                        gsap.to(quoteEl, 
                            {
                                opacity: 0, 
                                delay: 5, 
                                duration: 2,
                                onComplete: function(){
                                    index++;
                                    displayQuote();
                                    
                                }
    
                        });
                    }
            });
        }

        displayQuote();
    });