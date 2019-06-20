
function random_item(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function mergeTwo(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a,b) => a-b);
  }

function generateInsult(){
    let checked = document.getElementById("expletives").checked;
    let expletives;

    if(checked == true) {
        expletives = mergeTwo(insult_expletives_nsfw, insult_expletives);
    } else {
        expletives = insult_expletives;
    }

    let insult = random_item(insult_adjectives) + ' ' + random_item(expletives) + ' ' + random_item(insult_nouns);
    document.getElementById('insult').innerText = insult;
}

document.addEventListener("DOMContentLoaded", function(){
    generateInsult();
});

let input = document.querySelector('#insult');
input.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        event.preventDefault();
        generateInsult();
  }  
});