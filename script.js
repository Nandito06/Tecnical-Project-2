let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'Masukan Tinggi Badan Mu';
    } else {
        document.getElementById('height_error').innerHTML = '   ';
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Masukan Berat badan Mu';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.5) {
            result.innerHTML = 'Your BMI is : ' + bmi+' Underweight  olahraga,istirahat,makan makanan yang bernutrisi';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML = ' Your BMI is : ' + bmi+' Normal tetap jaga badan mu tetap sehat';
        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = 'Your BMI : ' + bmi+' Overweight kurangi makanan yg berkalori dan berolahraga secukupnya(Diet)';
        } 
        else {
            result.innerHTML = 'Your BMI: ' + bmi+' Obesity mohon konsultasi ke dokter';
        }
    } else {
        alert('Mohon Isi yang bener');
        result.innerHTML = '';
    }
});