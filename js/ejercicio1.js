


const words = ["cielo", "mar", "sol", "luz", "estrella", "camino", "vida", "arte", "color", "sueño"];

function addRandomWord() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const listItem = document.createElement("li");
    listItem.textContent = randomWord;
    document.getElementById("wordList").appendChild(listItem);
}
