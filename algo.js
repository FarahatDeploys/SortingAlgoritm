var ZValue;
var XValue;
var Z;
var X;
var InputCopy;
var Input;
var InputLength;
var FinalArray;
var NumberPassedCopy;
var rank = -1;
var z;
var zLenght;



function storeValue() {
  var Inputs = document.getElementsByClassName("CnumberInput");
  var Input = Inputs[0].value;
  console.log("The User Entered A value", Input);
  InputCopy = Array.from(Input);
  console.log("This Is the Input Copy", InputCopy);
  return Input;
}

function storeNumber() {
  var NumberPassed = document.getElementById("IDNumberToBeArranged");
  NumberPassedCopy = NumberPassed.value;
  return NumberPassedCopy;
}

// function NumberofNeededLoops() {
//   NumberofNeededLoopsvar = Math.ceil(Input.length * 0.5);
//   console.log("NumberofNeededLoopsvar", NumberofNeededLoopsvar);
// }

function LoopingOverArray() {
  storeValue();
  arraylength();
  var FinalArray = [];
  console.log("OuterLoopStarted");
  console.log("InnerLoopStarted");
  for (i = 0; i <= 9; i++) {
    for (zeta = 0; zeta <= arraylength(); zeta++) {
      if (InputCopy[zeta] == i) {
        FinalArray.push(InputCopy[zeta]);

      }
    }
  }

  return FinalArray;
}

// function ListDivider() {
//   MiddleNumberIndex = arraylength() * 0.5;
//   console.log("This is The MiddleNumberIndex", MiddleNumberIndex);
//   return MiddleNumberIndex;
// }

function arraylength() {
  //This Function Should Get the Array Length from the Input form and return the length

  InputLength = InputCopy.length;
  console.log("The Length of The User's Value is ", InputLength);
  console.log(typeof InputLength);
  return InputLength;
}

function sortNumber() {
  var M = 0;
  console.log(parseFloat(storeNumber()))
  z = Array.from(document.getElementById("ResultValues").textContent)
  console.log(z)
  zLenght = z.length
  for (i = 0; i <= z.length; i++) {

    if (parseFloat(storeNumber()) == parseFloat(z[i])) {
      rank = i - M
      console.log("This is rank", rank)
    }
    if (z[i] == ",") {
      M = M + 1
    }
  }

}

function ArrayBuilder() {
  var NewArray = [];
  var hexa = 0
  for (hexa = 0; hexa < zLenght; hexa++) {
    if (z[hexa] == NumberPassedCopy) {
      console.log("Alert")
      NewArray.push(NumberPassedCopy)
    }
    if (z[hexa] != ",") {
      NewArray.push(z[hexa])
      console.log("NotEqualpush")
    }
  }
  console.log(NewArray)
  document.getElementById("ResultValues2").textContent = NewArray
}


















// function approximate() {
//   InputLengthApproximated = Math.ceil(ListDivider());
//   console.log("The Input Length after approximation is ", InputLength);
//   return InputLengthApproximated;
// }

// function checkiflarger() {
//   var Z = approximate() - 1;
//   var X = Z + 1;
//   console.log("This is the X and Z Value", X, Z);
//   ZValue = InputCopy[Z];
//   XValue = InputCopy[X];
//   console.log("This should be the third value ", ZValue, XValue);
//   if (ZValue > XValue) {
//     return false;
//   }
//   return true;
// }

// function DeleteElements() {
//   //this functtion deletes the checkes values from the given array
//   console.log(" Delete Function Started");
//   console.log(typeof InputCopy);
//   console.log(InputCopy);
//   console.log("This is the new input copy", InputCopy);
// }

// function sorting() {
//   var Z = 0;
//   var X = 1;
//   var NewArray = [];
//   if (checkiflarger()) {
//     NewArray[Z] = ZValue;
//     NewArray[X] = XValue;
//   } else {
//     NewArray[X] = ZValue;
//     NewArray[Z] = XValue;
//   }

//   console.log(NewArray);
// }

function getButtonfromHtml() {
  //this function must be implemented at any case
  Inputs = document.getElementsByClassName("Cbutton");
  Input = Inputs[0];
  Input.addEventListener("click", JavaScriptCodeInOrder);
  //remmeber do not include arraylength with brackets in you code when adding click listener ()
  SubmitButton2 = document.getElementById("IDSubmit2")
  SubmitButton2.addEventListener("click", sortNumber)
}

function UpdateHTML() {
  ResultValues = document.getElementsByClassName("ResultValues")
  FirstResult = ResultValues[0]
  console.log(LoopingOverArray().toString())
  FirstResult.innerHTML = LoopingOverArray().toString()
}

function JavaScriptCodeInOrder() {
  console.log("JavaScriptStarted");
  storeValue();
  arraylength();
  // ListDivider();
  // approximate();
  // checkiflarger();
  // sorting();
  // DeleteElements();
  // NumberofNeededLoops();
  LoopingOverArray();
  UpdateHTML();
  storeNumber();
  sortNumber();
  ArrayBuilder();
}
//End of the functions lines after this line you should call all function by one function
function startWebsite() {
  getButtonfromHtml();
}
//Invoke The Mother function
startWebsite();