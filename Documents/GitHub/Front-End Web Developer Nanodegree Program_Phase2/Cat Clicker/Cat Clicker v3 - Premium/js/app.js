$(document).ready(function () {

    let cat = {
        name: ["Peatree in Box1", "Peatree in Box2", "Tobee", "Artemis", "Cool Kat"],
        pic: ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"]
    };
    
    //go through each catName and place text in DOM
    for (let i = 0; i < cat.name.length; i++) {

        //number we are on
        let num = cat.name[i];
        
        //add contents of catNames to DOM in separate <p> elements
        let elem = $('body').append(`<p class="name${i+1}">${num}</p>`);

                
        $(`.name${i + 1}`).click(function () {

            //console.log(`name${i+1} clicked`);
            console.log(`${num} clicked`);

            if (num === "Peatree in Box1") {
                hideCats();
                $('.image1').show();
            }

            else if (num === "Peatree in Box2") {
                hideCats();
                $('.image2').show();
            }
            else if (num === "Tobee") {
                hideCats();
                $('.image3').show();
            }
            else if (num === "Artemis") {
                hideCats();
                $('.image4').show();
            }
            else if (num === "Cool Kat") {
                hideCats();
                $('.image5').show();
            }



        });




    };

    for (let j = 0; j < cat.name.length; j++) {

        //number we are on
        let numPic = cat.pic[j];
        
        //add pictures of cats to DOM
        let elemPic = $('body').append(`<img class="image${j+1}" src="images/${cat.pic[j]}" alt="cat pic" />`);

        
    };

    function counter() {
        count++
    };

    function hideCats() {
        for (let k = 0; k < cat.name.length; k++) {
            $(`.image${k + 1}`).hide();
        };
    };

    //hide all the cat pictures on page load    
    hideCats();
    
});


    /*
     * 
$(document).ready(function () {

    let catNames = ["Peatree in Box1", "Peatree in Box2", "Tobee", "Artemis", "Cool Kat"];

    //go through each catName and place text in DOM
    for (let i = 0; i < catNames.length; i++) {

        //number we are on
        let num = catNames[i];

        //add contents of catNames to DOM in separate <p> elements
        let elem = $('body').append(`<p class="name${i+1}">${num}</p>`);


        $(`.name${i+1}`).click(function () {
            console.log(`name${i+1} clicked`);

        });

    };

    for (let j = 0; j < catNames.length; j++) {

        //number we are on
        let numPic = catNames[j];

        //add pictures of cats to DOM
        let elemPic = $('body').append(`<img src="images/cat${j+1}.jpg" alt="cat pic" />`)
    };






});







//let currentCat = catNames[i];
$(document).ready(function () {

    let catNames = ["Peatree in Box1", "Peatree in Box2", "Tobee", "Artemis", "Cool Kat"];

    //go through each catName and place text in DOM
    for (let i = 0; i < catNames.length; i++) {








        //add contents of catNames to DOM in separate <p> elements
        $('body').append(`<p class="name">${catNames[i]}</p>`);

        let currentCat = catNames[i];

        $('.name').click(function () {


        });


    };








});


     * 
     * 
     * 
     * 
     * 
     * 
 $('body').append('<img src="images/cat1.jpg" alt="cat pic" />')



//go through each catName and place text in DOM
    for (let i = 0; i < catNames.length; i++) {
        $('body').append(`<p class="name">${catNames.i}</p>`);
     };
    



    //go through each catName and place text in DOM
    catNames.forEach(function (e) {
        $('body').append(`<p class="name">${e}</p>`);
    });


    let count1 = 0;
    let count2 = 0;

    let name1 = `Peatree in a box ${count1} clicks.`;
    let name2 = `Peatree in another box ${count2} clicks.`;

    $('body').append(`<p id="name1">${name1}</p>`);
    $('body').append(`<div class="pic1"><img src="images/cat1.jpg" alt="cat pic" /></div>`);

    $('body').append(`<p id="name2">${name2}</p>`);
    $('body').append(`<div class="pic2"><img src="images/cat2.jpg" alt="cat pic" /></div>`);



    $('.pic1').click(function (e) {
        count1++;
        $('#name1').html(`Peatree in a box ${count1} clicks.`);
    });

    $('.pic2').click(function (e) {
        count2++;
        $('#name2').html(`Peatree in another box ${count2} clicks.`);
    });



     * 
     *
     */

    