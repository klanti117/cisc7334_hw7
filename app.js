let fact = document.getElementById("fact");
let factText = document.getElementById("factText");

let numberInput = document.getElementById("numberInput");
numberInput.addEventListener('input', getFactFetch);

function getFactFetch() {
    let number = numberInput.value;

    if (number != '') {
        fetch('http://numbersapi.com/' + number)
            .then(response => response.text())
            .then(data => {
                fact.style.display = 'block';
                factText.innerText = data;
            })
            .catch(err => console.log(err));
    }
}
