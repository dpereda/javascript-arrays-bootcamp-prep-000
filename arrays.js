var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(arrayIt,element){
  arrayIt.unshift(element)
  return arrayIt
}

function addElementToEndOfArray(array,element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(arrayIt,element){
  arrayIt.push(element)
  return arrayIt
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyAddElementToBeginningOfArray(arrayIt,element){
  arrayIt.unshift(element)
  return arrayIt
}


//destructivelyAddElementToBeginningOfArray(chocolateBars,"Hello")