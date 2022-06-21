
var charsTyped = [];

var i = 0;

document.onkeypress = function (evt) {
    evt = evt || window.event;

    // Ensure we only handle printable keys
    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;

    if (charCode) {
        charsTyped.push(String.fromCharCode(charCode));
    }

    if(charsTyped[0] == 'l'){

        if (charsTyped[0 + 1] == 'o' && charsTyped[0 + 2] == 'v' && charsTyped[0 + 3] == 'e') {

            window.location.replace('blank.html');
    
        }
    }

    console.log(charsTyped);

    var ind = charsTyped.indexOf('l', i);

    if (charsTyped[ind] == 'l') {
        i++;
    }

    if (charsTyped[ind + 1] == 'o' && charsTyped[ind + 2] == 'v' && charsTyped[ind + 3] == 'e') {

        window.location.replace('blank.html');

    }


};


