function triangleAreaCalculator(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleValueText = triangleBase.value;
    const triangleValueNumber = parseFloat(triangleValueText);
    
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const triangleHeightNumber = parseFloat(triangleHeightText);

    const currentTriangleArea = 0.5 * triangleValueNumber * triangleHeightNumber;
    // validation
    if(isNaN(triangleValueNumber) || isNaN(triangleHeightNumber)){
        alert('Please input Number!!');
        return;
    }

    calculationEntry('Triangle' , currentTriangleArea);

    
    
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = currentTriangleArea;

}

function rectangleAreaCalculator(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthString = rectangleWidth.value;
    const width = parseFloat(rectangleWidthString);

    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthString = rectangleLength.value;
    const length = parseFloat(rectangleLengthString);

    const rectangleTotalArea = width * length;
    calculationEntry('Rectangle' , rectangleTotalArea);

    const rectangleCurrentArea = document.getElementById('rectangle-current-area');
    rectangleCurrentArea.innerText = rectangleTotalArea;
}

function ParallelogramAreaCalculator(){
    const base = fieldInput('Parallelogram-base');
    const height = fieldInput('Parallelogram-height');
    const area = base * height;
    textByInnerText('Parallelogram-current-area' , area);
    calculationEntry('Parallelogram' , area);
    
    
}

function ellipseAreaCalculator(){
    const majorAxis = fieldInput('major-axis');
    const minorAxis = fieldInput('minor-axis');
    const area = 3.1416 * majorAxis * minorAxis;
    textByInnerText('ellipse-currient-area' , area);
    calculationEntry('Ellipse' , area);
}

function fieldInput(fieldId){
    const field = document.getElementById(fieldId);
    const fieldValueString = field.value;
    const fieldValueNumber = parseFloat(fieldValueString);
    return fieldValueNumber;
}

function textByInnerText(areaId , area){
    const innerValue = document.getElementById(areaId);
    innerValue.innerText = area;

}

function calculationEntry(areaType, area){
    
    const entry = document.getElementById('calculation-entry');
    const count = entry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class='btn btn-success'>button</button>`;
    entry.appendChild(p);
}

