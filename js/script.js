//A)
let first_list_item = document.querySelector("ul > li");
first_list_item.style.color = "blue";

//B
let list_element = document.querySelector("ul li:nth-child(3)");

while(list_element.previousElementSibling !== null){
    list_element.previousElementSibling.style.fontWeight = "bold";
    list_element = list_element.previousElementSibling;
}

//C
let list_father = document.querySelector("ul li:nth-child(5)").parentNode;
list_father.style.border = "1px solid black";

//D
console.log(list_father.Siblings);