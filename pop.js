
var charsTyped = [];

var i = 0;

document.onkeypress = function (evt) {
    evt = evt || window.event;

    // Ensure we only handle printable keys
    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;

    if (charCode) {
        charsTyped.push(String.fromCharCode(charCode));
    }

  
    if(charsTyped[0] == 's'){

        if (charsTyped[0 + 1] == 'a' && charsTyped[0 + 2] == 'n') {

            window.location.replace('main.html');
    
        }
    }

    console.log(charsTyped);

    var ind = charsTyped.indexOf('s', i);

    if (charsTyped[ind] == 's') {
        i++;
    }

    if (charsTyped[ind + 1] == 'a' && charsTyped[ind + 2] == 'n') {

        window.location.replace('main.html');


    }


};


