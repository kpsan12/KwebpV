document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const heightRange = document.getElementById("heightRange");
    const weightRange = document.getElementById("weightRange");
    const calculateButton = document.getElementById("calculate");
    const bmiResultElement = document.getElementById("bmiResult");
    const bmiCategoryElement = document.getElementById("bmiCategory");
    const lastBMIElement = document.getElementById("lastBMI");
    const bmiChangeElement = document.getElementById("bmiChange");
    const historyList = document.getElementById("historyList");
    let lastBMI = null;

    calculateButton.addEventListener("click", calculateBMI);

    heightRange.addEventListener("input", function () {
        heightInput.value = heightRange.value;
    });

    weightRange.addEventListener("input", function () {
        weightInput.value = weightRange.value;
    });

    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
            const bmi = calculateBMIValue(height, weight);
            const category = getBMICategory(bmi);

            // Display the current calculation
            bmiResultElement.textContent = bmi.toFixed(2);
            bmiCategoryElement.textContent = category;

            // Calculate and display BMI change
            if (lastBMI !== null) {
                const change = bmi - lastBMI;
                lastBMIElement.textContent = lastBMI.toFixed(2);
                bmiChangeElement.textContent = (change >= 0 ? "+" : "") + change.toFixed(2);
            }

            // Store the current calculation as the lastBMI
            lastBMI = bmi;

            // Store the current calculation in history
            const historyItem = document.createElement("li");
            historyItem.textContent = `BMI: ${bmi.toFixed(2)} (${category})`;
            historyList.appendChild(historyItem);

            // Clear the input fields
            heightInput.value = "";
            weightInput.value = "";
        } else {
            alert("Please enter valid height and weight values.");
        }
    }

    function calculateBMIValue(height, weight) {
        return weight / ((height / 100) ** 2);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi < 24.9) {
            return "Normal Weight";
        } else if (bmi < 29.9) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }
});
