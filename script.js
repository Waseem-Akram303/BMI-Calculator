function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const result = document.getElementById("result");
  const resultAfter = document.getElementById("resultAfter");

  if (weight === "" || height === "") {
    result.style.color = "red";
    result.textContent = "Please enter weight and height";
    return;
  }

  const heightInMeter = height / 100;
  const bmi = weight / (heightInMeter * heightInMeter);
  const finalBMI = bmi.toFixed(1);

  const bmiValue = Number(finalBMI);

  if (bmiValue < 18.5) {
    resultAfter.textContent = "Your BMI is Low";
    resultAfter.style.color = "orange";
  }else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    resultAfter.textContent = "Your BMI is Normal";
    resultAfter.style.color = "green";
  }else{
    resultAfter.textContent = "Your BMI is High";
    resultAfter.style.color = "red";
  }

    result.style.color = "Black";
  result.textContent = "Your BMI is: " + finalBMI;
}

function clearBMI(){
    resultAfter.textContent = "";
    result.textContent = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
}
