function tasks() {
    let newItem = document.getElementById("new-item").value;
    let list = document.getElementById("todo-list");
    let item = document.createElement("li");
    item.innerHTML = '<input type="checkbox" id="item' + list.childElementCount + '" >' + newItem;
    list.appendChild(item);
    document.getElementById("new-item").value = "";
}