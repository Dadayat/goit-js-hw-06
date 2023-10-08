const iteams = document.querySelectorAll(".item");

const itemArr = [...iteams];
console.log(`Number of categories: ${itemArr.length}`);

itemArr.forEach((iteam) => {
    console.log(`Category: ${iteam.firstElementChild.textContent}`);
    console.log(`Elements: ${iteam.lastElementChild.children.length}`);
});