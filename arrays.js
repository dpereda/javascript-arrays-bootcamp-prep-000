var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(arrayIt,element){
  arrayIt.unshift(element)
  return arrayIt
}



destructivelyAddElementToBeginningOfArray(chocolateBars,"Hello")