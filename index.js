ticketNumber =

function takeANumber(Line, newCustomer){
  //console.log("Welcome, " + newCustomer + ". You are number " + Line.push(newCustomer) + " in line.")
  Line.push(newCustomer)
  console.log(`Welcome, ${newCustomer}. You are number ${Line.length} in line.`)
  return `Welcome, ${newCustomer}. Your ticket Number isr ${ticketNumber} in line.`
  }

function nowServing(Line){
  if(Line.length===0){
    console.log("There is nobody waiting to be served!");
    return "There is nobody waiting to be served!"
    }else{
    console.log("Currently serving "+Line[0])
    return `Currently serving ${Line.shift()}.`
  }
}

function currentLine(Line){
var CurLine = []
  if(Line.length===0){
    console.log("The line is currently empty.");
    return "The line is currently empty."
  }
  else{
  for(var i=0;i<Line.length;i++){
    CurLine.push((` ${i+1}. ${Line[i]}`))
  }
  console.log("The line is currently:" + CurLine)
  return "The line is currently:" + CurLine
}
}


// testing

var katzDeliLine = []
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
 
currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
 
nowServing(katzDeliLine); // "Currently serving Ada."
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
 
takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1(this should be 3) in line."
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 
nowServing(katzDeliLine); // "Currently serving Grace."
 
currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"