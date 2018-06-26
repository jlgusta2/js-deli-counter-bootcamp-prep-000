var katzDeliLine = [];

function takeANumber(katzDeliLine, name){

    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  }

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");


function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0) {
    var report ="Currently serving ${katzDeliLine[0]}.";
    katzDeliLine.shift();
    return report;
  } else {
    return "There is nobody waiting to be served!";
  }
}