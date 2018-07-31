$(document).ready(function () {
    let model = {

    };

    let octopus = {

    };

    let view = {

    };


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
                hideCatText();
                $('.image1').show();
                $('.imageText1').show();
            }
            else if (num === "Peatree in Box2") {
                hideCats();
                hideCatText();
                $('.image2').show();
                $('.imageText2').show();
            }
            else if (num === "Tobee") {
                hideCats();
                hideCatText();
                $('.image3').show();
                $('.imageText3').show();
            }
            else if (num === "Artemis") {
                hideCats();
                hideCatText();
                $('.image4').show();
                $('.imageText4').show();
            }
            else if (num === "Cool Kat") {
                hideCats();
                hideCatText();
                $('.image5').show();
                $('.imageText5').show();
            }
        });
    };

    for (let j = 0; j < cat.name.length; j++) {
        //number we are on
        let numPic = cat.pic[j];
        //add pictures of cats to DOM
        let elemPic = $('body').append(`<img class="image${j+1}" src="images/${cat.pic[j]}" alt="cat pic" />`);
    };

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    
    $('.image1').click(function (e) {
        count1++;
        $('.imageText1').html(`Peatree in Box1 ${count1} clicks.`);
    })
    $('.image2').click(function (e) {
        count2++;
        $('.imageText2').html(`Peatree in Box2 ${count2} clicks.`);
    })
    $('.image3').click(function (e) {
        count3++;
        $('.imageText3').html(`Tobee ${count3} clicks.`);
    })
    $('.image4').click(function (e) {
        count4++;
        $('.imageText4').html(`Artemis ${count4} clicks.`);
    })
    $('.image5').click(function (e) {
        count5++;
        $('.imageText5').html(`Cool Kat ${count5} clicks.`);
    })

    for (let k = 0; k < cat.name.length; k++) {
        //number we are on
        let numPic = cat.pic[k];
        //add cat name and counter below cat pic
        let elemPicText = $('body').append(`<p class="imageText${k + 1}">${cat.name[k]} ${count1}  clicks</p>`)
    };
        
    //hide catpic function
    function hideCats() {
        for (let m = 0; m < cat.name.length; m++) {
            $(`.image${m + 1}`).hide();
        };
    };

    //hide cat text function
    function hideCatText() {
        for (let n = 0; n < cat.name.length; n++) {
            $(`.imageText${n + 1}`).hide();
        };
    };

    //hide all the cat pictures on page load    
    hideCats();
    hideCatText();
    
});