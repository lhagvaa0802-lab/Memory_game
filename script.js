const boxes = document.getElementsByClassName("box");
const containerBox = document.getElementsByClassName("container_box");

// let compare = [];
// for (let i = 0; i < boxes.length; i++) {
//   const box = boxes[i];

//   box.addEventListener("click", () => {
//     compare.push({
//       element: box,
//       value: box.textContent,
//     });

//     if (compare.length === 2) {
//       checker();
//       compare = [];
//       console.log(compare);
//     }
//   });
// }

// const checker = () => {
//   if (compare[0].value === compare[1].value) {
//     console.log((compare[0].element.textContent = "0"));
//     console.log((compare[1].element.textContent = "0"));
//   }
// };

boxes = [
  {
    element: box,
    value: box.textContent,
  },
  {
    element: box,
    value: box.textContent,
  },
  {
    element: box,
    value: box.textContent,
  },
  {
    element: box,
    value: box.textContent,
  },
];

const randomGenerotor = () => {
  const box = boxes[Math.floor(Math.random() * items.length)];
};
