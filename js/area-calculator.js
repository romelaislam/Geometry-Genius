
// triangle-area

function TriangleAreaCalculate(){

    // get triangle base value
    const BaseField = document.getElementById('triangle-base');
    const BaseValueText = BaseField.value;
    const StringBaseValueText = parseFloat(BaseValueText)
    console.log(StringBaseValueText);

    // triangle-hight Value 

    const HightField = document.getElementById('triangle-hight');
    const HightFieldValue = HightField.value;
    const StringValueText = parseFloat(HightFieldValue)
    console.log(StringValueText);

    const triangleArea = 0.5 * StringBaseValueText * StringValueText;
    console.log(triangleArea);

    const areaSpan = document.getElementById('AreaSpan');
    areaSpan.innerText = triangleArea;
}