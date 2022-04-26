class Slider {
    constructor() {
        this.images = ["1.jpg", "2.jpg", "3.jpg"];

        this.numberOfCircle = 0;

        this.numberOfSlide = 0;

        this.headlines = ["Quisque vulputate mi consectetur", "Pellentesque eleifend, dui sit amet", "Nam rhoncus nec nibh sit amet"];

        this.underHeadlines = ["Nibh dignissim convallis.", "Mauris diam fermentum massa.", "Donec mauris dolor, suscipit a felis auctor."];

        this.percentOfProgresBox = 0;

        this.contents = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim."];

        this.UiSelectors = {
            background: '[data-background]',
            circle1: '[data-circle1]',
            circle2: '[data-circle2]',
            circle3: '[data-circle3]',
            headline: '[data-headline]',
            underHeadline: '[data-under-headline]',
            progressBox: '[data-progress-box]',
            content: '[data-content]'
        }

    }

     initializeSlider() {
        this.background = document.querySelector(this.UiSelectors.background);
        this.circle1 = document.querySelector(this.UiSelectors.circle1);
        this.circle2 = document.querySelector(this.UiSelectors.circle2);
        this.circle3 = document.querySelector(this.UiSelectors.circle3);
        this.headline = document.querySelector(this.UiSelectors.headline);
        this.underHeadline = document.querySelector(this.UiSelectors.underHeadline);
        this.progressBox = document.querySelector(this.UiSelectors.progressBox);
        this.content = document.querySelector(this.UiSelectors.content);

        this.circleList = [this.circle1, this.circle2, this.circle3];

        this.background.style.backgroundImage = `url('${this.images[this.numberOfSlide]}')`;
        for(this.i=0; this.i<3; this.i++) {
            this.circleList[this.i].classList.remove('bolder-circle');
        }
        this.circleList[this.numberOfSlide].classList.add('bolder-circle');
        this.headline.textContent = this.headlines[this.numberOfSlide];
        this.underHeadline.textContent = this.underHeadlines[this.numberOfSlide];
        this.progressBox.setAttribute('value', this.percentOfProgresBox);
        this.content.textContent = this.contents[this.numberOfSlide];
    }

    changeParamenters() {
        if(this.numberOfSlide < 2) {
            this.numberOfSlide++;
        }
        else if(this.numberOfSlide == 2) {
            this.numberOfSlide = 0;
        }
        this.initializeSlider();
    }

    changepercentOfProgresBox() {
        if(this.percentOfProgresBox >= 1) {
            this.percentOfProgresBox = 0;
            this.changeParamenters();
        }
        this.percentOfProgresBox = this.percentOfProgresBox + 0.001;
        this.initializeSlider();
    }

}
