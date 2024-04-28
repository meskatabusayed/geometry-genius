function areaCalculator(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleValueText = triangleBase.value;
    const triangleValueNumber = parseFloat(triangleValueText);
    
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const triangleHeightNumber = parseFloat(triangleHeightText);
    console.log(triangleHeightNumber);
}