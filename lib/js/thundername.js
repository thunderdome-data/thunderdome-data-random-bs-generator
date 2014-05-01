//this is the data used to generate a name
//two arrays (boy or girl), each containing the three arrays that have the 
//pieces randomly selected to generate a name: name + title + place
var boy_or_girl = [
                        [
                            ["Edmund","Ethelred","Henry","Rupert","Spencer","Alfred","Simon","Giles","Alistair","Basil","Rowan","Hugh","Rufus","Hodor","Neville","Percy","Ridgewell","Vincent","Nigel","Royston","Mervyn","Dermot","Rodney","Cyril","Clive","Angus","Fauntleroy","Rudyard","Gregor","Samwell","Benedict"],
                            ["Viscount","Duke","Royal Consort","Earl","Prince","Viceroy","Marquis","Count","Baron","Grand Duke","Archduke"],
                            ["Slough","Paddington Station","Wellington","Cougarton Abbey","Narnia","Rivendell","Weathertop","Havisham","Wuthering Heights","Northanger Abbey","Blackburn Lancashire","the Isle of Wight","Nottingham","Shropshire","Worcestershire","Winterfell","Hufflepuff","Westeros","Gloucester","Blackhaven","Casterly Rock","Northumbria","Anglophilia","Dunkirk","Meryton","Norland Park","Highbury","Windsor","St. Albans","Canterbury","Bolingbroke"]
                         ],
                         [
                            ["Isla","Dolores","Beatrix","Isabella","Charlotte","Lydia","Evelyn","Arabella","Talisa","Hermione","Matilda","Philippa","Tilly","Persephone","Georgina","Darcy","Claire","Malory","Ygritte","Olivia","Mary","Anne","Elizabeth","Eleanor","Imelda","Imogen","Prunella","Fionnula","Eunice","Rosamund","Jayne"],
                            ["Duchess","Princess","Baroness","Royal Consort","Marquess","Grand Duchess","Archduchess","Vicereine","Countess","Viscountess"],
                            ["Slough","Paddington Station","Wellington","Cougarton Abbey","Narnia","Rivendell","Weathertop","Havisham","Wuthering Heights","Northanger Abbey","Blackburn Lancashire","the Isle of Wight","Nottingham","Shropshire","Worcestershire","Winterfell","Hufflepuff","Westeros","Gloucester","Blackhaven","Casterly Rock","Northumbria","Anglophilia","Dunkirk","Meryton","Norland Park","Highbury","Windsor","St. Albans","Canterbury","Bolingbroke"]
                            
                        ]
    ];
//text we want to use for the button -- a single array of choices. Just put one if you don't want it to change
var button = ["Smashing! Give us another!","That? For a royal?","Brilliant! Have another go?","Oh dear, not that.","Simply beastly. Try again.","Blast! I don't like it. One more.","Bollocks! Give us another.","Cracking! Have another go?","A bit dodgy. Let's try again.","I'd fancy another, please.","Jolly good! Let's keep going."];

if(typeof newName == 'function') { newName(); }//executes our main function to choose a name and button text when page loads


function newName() {
    //   Note that choices and button are arrays set globally on the calling page
    //   choices is an array of arrays, where each member array has a list of pieces
    //   we randomly join to form a name
    //   button is an array of choices for the button text
    var min = 0; //only here to make the random function flexible -- e.g., so we can pick random between two variable numbers
    //  Wee below for picker function: we use it to randomly pick an element from an array. 
    //  Here we assign the pieces to the name variable, which is inserted in the new-name div
    var name = ''; //holder for the name we're building
    //  Iterate over the member arrays in choices and build the full name
    var choices = picker(min, boy_or_girl);
    for(var i=0; i< choices.length; i++) {
        if(i == 0) {
            var separator = ', ';
        }
        else if(i == 1) {
            var separator = ' of ';
        }
        else {
            var separator = '';
        }
        name += picker( min, choices[i]) + separator; //pick a random element from this array and append it onto the end of the name we're building
    }
    document.getElementById('new-name').innerHTML = name; //insert the name we built in the new-name div
    //  same as above but pick and insert the button text
    var buttonText = picker(min,button);
    document.getElementById('new-name-button').innerHTML = buttonText;
//    refresh_sharing_buttons();
}

function picker(min,choices) { //min is the minimum integer to choose, choices is the array to pick from
    var max = choices.length-1; //the max value is the length of the array - 1 because of zero indexing
    var random = Math.floor(Math.random() * (max - min + 1)) + min; //random value calc to pick an integer
    return choices[random]; //use that interger to pick one of the array elements
}
newName();

