let leftArray = []
let rightArray = []

const addAge = () => {
  let input = document.getElementById("edad").value
  let numberInput = parseInt(input)
  leftArray.push(numberInput)
  showLeftArray(leftArray)
  showRightArray(rightArray)
}

const showLeftArray = (leftArray) => {
  let contentLeftTable = ""
  let leftTable = document.getElementById("tablaIzquierda");
  for (let index = 0; index < leftArray.length; index++) {
    contentLeftTable +=
      "<tr>" +
      "<td>" +
      leftArray[index] +
      "</td > " +
      "<td>" +
      "<button class= 'btn-eliminar' onclick='deleteLeftArray(" +
      index +
      ")'>Eliminar</button>" +
      "</td > " +
      "<td>" +
      "<button class= 'btn-mover' onclick='moveToRight(" +
      index +
      ")'>➜</button>" +
      "</td > " +
      "</tr > ";
  }
  leftTable.innerHTML = contentLeftTable
}

const deleteLeftArray = (indexNumber) => {
  leftArray.splice(indexNumber, 1)
  showLeftArray(leftArray);
}

//////////////////////////////////////
const showRightArray = (rightArray) => {

  let contentRightTable = "";
  let rightTable = document.getElementById("tablaDerecha");
  for (let index = 0; index < rightArray.length; index++) {
    contentRightTable +=
      "<tr>" +
      "<td>" +
      "<button class='btn-mover' onclick='moveToLeft(" + index +")'>⬅</button>" +
      "</td > " +
      "<td>" +
      rightArray[index] +
      "</td > " +
      "<td>" +
      "<button class= 'btn-eliminar' onclick='deleteRightArray(" +
      index +
      ")'>Eliminar</button>" +
      "</td > " +
      "</tr > ";
  }
  rightTable.innerHTML = contentRightTable;
};

const deleteRightArray = (indexNumber) => {
  rightArray.splice(indexNumber, 1);
  showRightArray(rightArray);
};

const moveToRight = (indexNumber) => {
  let numberToRight = leftArray[indexNumber]
  rightArray.push(numberToRight)  
  deleteLeftArray(indexNumber)
  showLeftArray(leftArray);
  showRightArray(rightArray)

}

const moveToLeft = (indexNumber) => {
  let numberToLeft = rightArray[indexNumber]
  leftArray.push(numberToLeft)
  deleteRightArray(indexNumber)
  showRightArray(rightArray)
  showLeftArray(leftArray)
}


