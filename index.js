document.getElementById('submit').onclick = function makePrediction(){
    //httpGetAsync("localhost:1337/?text=test")
    httpPost("localhost:1337/", "test")
}
// https://localhost:1337/?text=test

function httpPost(url, text) {
    var textarea = document.getElementById('text').value;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:1337/");

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => alertEmotion(xhr.responseText);

    let data = `{
        "text": "${textarea}"
        }`;

    xhr.send(data);
}

function alertEmotion(text){
    const obj = JSON.parse(text);
    emotion = obj['emotion'];

    const emotions = document.querySelectorAll('.emotion-block')
    emotions.forEach(emot =>{
        emot.style.transition = '1s';
        emot.style.flex = 1;
    })
    x = "#" + emotion + "-container"
    get_container = document.querySelector(x);
    get_container.style.flex = 4;
}