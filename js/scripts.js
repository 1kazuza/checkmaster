function tasks() {
    let newItem = document.getElementById("new-item").value;
    let list = document.getElementById("todo-list");
    let item = document.createElement("li");
    item.innerHTML = '<input type="checkbox" id="item' + list.childElementCount + '" >' + newItem;
    list.appendChild(item);
    document.getElementById("new-item").value = "";
}

const inputField = document.querySelector("new-item");
inputField.addEventListener("change", validateInput);

function validateInput(event) {
    const inputValue = event.target.value;
    if (inputValue === "") {
        console.log("Please, enter a value!");
    } else {
        console.log("Insert this value: ", inputValue);
    }
}