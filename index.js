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
    const neutral = document.querySelector('#neutral-container');
    const happiness = document.querySelector('#happiness-container');
    const enthusiasm = document.querySelector('#enthusiasm-container');
    const sadness = document.querySelector('#sadness-container');
    const disgust = document.querySelector('#disgust-container');
    const fear = document.querySelector('#fear-container');
    const anger = document.querySelector('#anger-container');
    neutral.style.transition = "1s";
    happiness.style.transition = "1s";
    enthusiasm.style.transition = "1s";
    sadness.style.transition = "1s";
    disgust.style.transition = "1s";
    fear.style.transition = "1s";
    anger.style.transition = "1s";
    switch (emotion){
        case 'neutral':
            neutral.style.flex = 4;
            happiness.style.flex = 1;
            enthusiasm.style.flex = 1;
            sadness.style.flex = 1;
            disgust.style.flex = 1;
            fear.style.flex = 1;
            anger.style.flex = 1;
            break;
        case 'happiness':
            neutral.style.flex = 1;
            happiness.style.flex = 4;
            enthusiasm.style.flex = 1;
            sadness.style.flex = 1;
            disgust.style.flex = 1;
            fear.style.flex = 1;
            anger.style.flex = 1;
            break;
        case 'enthusiasm':
            neutral.style.flex = 1;
            happiness.style.flex = 1;
            enthusiasm.style.flex = 4;
            sadness.style.flex = 1;
            disgust.style.flex = 1;
            fear.style.flex = 1;
            anger.style.flex = 1;
            break;
        case 'sadness':
            neutral.style.flex = 1;
            happiness.style.flex = 1;
            enthusiasm.style.flex = 1;
            sadness.style.flex = 4;
            disgust.style.flex = 1;
            fear.style.flex = 1;
            anger.style.flex = 1;
            break;
        case 'disgust':
            neutral.style.flex = 1;
            happiness.style.flex = 1;
            enthusiasm.style.flex = 1;
            sadness.style.flex = 1;
            disgust.style.flex = 4;
            fear.style.flex = 1;
            anger.style.flex = 1;
            break;
        case 'fear':
            neutral.style.flex = 1;
            happiness.style.flex = 1;
            enthusiasm.style.flex = 1;
            sadness.style.flex = 1;
            disgust.style.flex = 1;
            fear.style.flex = 4;
            anger.style.flex = 1;
            break;
        case 'anger':
            neutral.style.flex = 1;
            happiness.style.flex = 1;
            enthusiasm.style.flex = 1;
            sadness.style.flex = 1;
            disgust.style.flex = 1;
            fear.style.flex = 1;
            anger.style.flex = 4;
            break;
        default:
            alert('def');
            break;
    }
}