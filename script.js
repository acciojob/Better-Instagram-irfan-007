let drags = ["dragover", "dragenter", "drop"];
let images = document.querySelectorAll(".image");

images.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("id", e.target.id);
  });
});

for (let img of images) {
  for (let drg of drags) {
    img.addEventListener(drg, (e) => {
      e.preventDefault();
      if (drg == "drop") {
        let id = e.dataTransfer.getData("id");
        let dragElem = document.getElementById(id);
        let dropElem = document.getElementById(e.target.id);
        let dragContainer = dragElem.parentNode;
        let dropContainer = dropElem.parentNode;
        dragContainer.appendChild(dropElem);
        dropContainer.appendChild(dragElem);
      }
    });
  }
}
