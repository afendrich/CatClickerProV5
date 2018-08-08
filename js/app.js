/* ======= Model ======= */

var model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Peatree in Box1',
            imgSrc: 'images/cat1.jpg',
        },
        {
            clickCount: 0,
            name: 'Peatree in Box2',
            imgSrc: 'images/cat2.jpg',
        },
        {
            clickCount: 0,
            name: 'Tobee',
            imgSrc: 'images/cat3.jpg',
        },
        {
            clickCount: 0,
            name: 'Artemis',
            imgSrc: 'images/cat4.jpg',
        },
        {
            clickCount: 0,
            name: 'Cool Kat',
            imgSrc: 'images/cat5.jpg',
        }
    ]
};


/* ======= Octopus ======= */

var octopus = {

    init: function () {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
                
    },

    getCurrentCat: function () {
        return model.currentCat;
    },

    getCats: function () {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function () {
        model.currentCat.clickCount++;
        catView.render();
    }

    
};


/* ======= View ======= */

var catView = {

    init: function () {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function () {
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function () {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function (catCopy) {
                return function () {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        };

        
        
    }
};

let adminView = {

    //hides the form
    init: function () {
        $('#adminForm').hide();
        $('#cancel').hide();
        $('#submit').hide();
        this.render();
    },

    render: function () {
        
        $('#adminButton').click(function () {
            console.log('admin form button clicked');
            $('#adminForm').show();
            $('#cancel').show();
            $('#submit').show();
        });

        $('#cancel').click(function () {
            console.log('cancel button clicked');
            $('#adminForm').hide();
            $('#cancel').hide();
            $('#submit').hide();
        });
    }
    
};

// make it go!
octopus.init();
adminView.init();
