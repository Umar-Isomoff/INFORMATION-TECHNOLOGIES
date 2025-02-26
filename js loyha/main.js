function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let resultDiv = document.getElementById('result');

    if (isNaN(height),  isNaN(weight),  height <= 0 || weight <= 0) {
        return;
    }

    let bmi = weight / (height * height);
    let qiymat = "";

    if (bmi < 18.5) {
        qiymat = "Ozg'in";
        resultDiv.innerHTML = "<p>Tabriklaymiz Siz ozg'insiz</p>";
        resultDiv.style.color = "blue";
    } else if (bmi < 24.9) {
        qiymat = "Meyyorda";
        resultDiv.innerHTML = '<p>Natijangiz meyorda</p>';
        resultDiv.style.color = "green";
    } else if (bmi < 29.9) {
        qiymat = "Ortiqcha vaznli";
        resultDiv.innerHTML = "<p>Sizda ortiqcha vazn bor</p>";
        resultDiv.style.color = "orange";
    } else {
        qiymat = "Semiz";
        resultDiv.innerHTML = "<p>Siz juda semizsiz</p>";
        resultDiv.style.color = "red";
    }
}
