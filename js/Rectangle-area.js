// Rectangle-Area

function RectangleAreaCalculation(){

    //Rectangle-width-Value 
  const RectangleArea = document.getElementById('Rectangle-width');
  const RectangleAreaValue = RectangleArea.value;
  const StringValue = parseFloat(RectangleAreaValue);
   console.log(StringValue);

  //Rectangle-length-Value 

   const RectangleLength = document.getElementById('Rectangle-length');
    const RectangleLengthValue = RectangleLength.value;
    const StringRectangleValue = parseFloat(RectangleLengthValue);
    console.log(StringRectangleValue);

     //Rectangle-calculate
    const RectangleAreaText = StringValue * StringRectangleValue;
    console.log(RectangleAreaText);

    const RectangleText = document.getElementById('Rectangle-Area');
    RectangleText.innerText = RectangleAreaText;
}


// Parallelogram-Area-Calculate
function ParallelogramCalculate(){
    
    const base = inputField('Parallelogram-base');
    const hight = inputField('Parallelogram-hight');
    const totalArea = base * hight;
    setTextElement('Parallelogram-Area',totalArea);
    
}

    function EllipseAreaCalculation(){
        const EllipseArea = inputField('Ellipse-a');
        const EllipseAreaB = inputField('Ellipse-b');
        const totalArea = 3.1416 *  EllipseArea * EllipseAreaB;
        setTextElement('Ellipse-Area',totalArea)
    }




function inputField(Id){
    const ParallelogramArea = document.getElementById(Id);
    const ParallelogramValue = ParallelogramArea.value;
    const StringValue = parseFloat(ParallelogramValue);
    return StringValue;
}

function setTextElement(elementId , totalArea){
    const element = document.getElementById(elementId);
    element.innerText = totalArea;
}

