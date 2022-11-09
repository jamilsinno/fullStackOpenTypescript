export const bmiCalculator = (height: number, weight: number): string => {
    // convert height to meters
    height = height / 100;
    const bmi = weight / height**2;

    if (bmi < 16) {
        return 'Underweight (Severe thinness)';
    } else if (bmi < 17){
        return 'Underweight (Moderate thinness)';
    } else if (bmi < 18.5) {
        return 'Underweight (Mild thinness)';
    } else if (bmi < 25) {
        return 'Normal range';
    } else if (bmi < 30) {
        return 'Pre-obese';
    } else if (bmi < 35) {
        return 'Obese (Class I)';
    } else if (bmi < 40) {
        return 'Obese (Class II)';
    } else {
        return 'Obese (Class III)';
    }
};

// console.log(bmiCalculator(180, 74))

// export interface calculateBmi {
//     calculateBmi(height: number, weight: number): string;
// }