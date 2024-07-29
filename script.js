//your code here
let drags = ["dragover", "dragenter", "drop"];
let images = document.querySelectorAll(".image");
let parent = document.getElementById("parent");

images.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    let t = 0;
    let prt = document.querySelectorAll(".image");
    for (let i = 0; i < prt.length; i++) {
      if (prt[i] == e.target) t = i;
    }
    e.dataTransfer.setData("id", e.target.id);
    e.dataTransfer.setData("index", t);
  });
});

for (let img of images) {
  for (let drg of drags) {
    img.addEventListener(drg, (e) => {
      e.preventDefault();
      if (drg == "drop") {
        let id = e.dataTransfer.getData("id");
        let index = e.dataTransfer.getData("index");
        let dragElem = document.getElementById(id);
        let dropElem = e.target;
        // console.log(index);
        parent.appendChild(dragElem.cloneNode(true));
        parent.replaceChild(dragElem, dropElem);
        parent.insertBefore(dropElem, parent.childNodes[index]);
        parent.removeChild(parent.lastElementChild);
      }
    });
  }
}