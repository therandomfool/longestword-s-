

function  longestWords(str) {
    let words = str.split(' ');
    let size = 0;
    let max = [""];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= size) {
            size = words[i].length;
            if(max[max.length -1].length < words[i].length){
                max = [];
                max.push(words[i]);
            }
            else {
                max = [...max, words[i]];
            }
    }

    }

    return [...max];
}

console.log(longestWords("I woke up early today"));
console.log(longestWords("Breakfast is the most important meal of the day!"));
console.log(longestWords("Who doesn't like eating in the morning?"));
console.log(longestWords("Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores incidunt repudiandae cumque voluptatum, dignissimos amet ratione aliquam quos commodi expedita non ipsum in eius quaerat reiciendis omnis autem sint?"));  

