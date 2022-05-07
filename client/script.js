function onSend(e) {
    e.preventDefault();
    let input = document.getElementById("exampleFormControlInput1");
    console.log(input.value);
    alert(input.value);
}


let button = document.getElementById("send");
button.addEventListener('click', onSend);