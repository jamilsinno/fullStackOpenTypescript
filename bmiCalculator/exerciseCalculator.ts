    interface Answer {
        periodLength: number;
        trainingDays: number;
        success: boolean;
        rating: number;
        ratingDescription: string;
        target: number;
        average: number;
    }

export const exerciseCalculator = (arr: number[], target: number): Answer => {
    let trainingDays = 0;
    let success = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            trainingDays++;
        }
    }

    trainingDays >= target ? success : success = false;
    
    const answer = {
        periodLength: arr.length,
        trainingDays: trainingDays,
        success: success,
        rating: 2,
        ratingDescription: 'Great job!',
        target: target,
        average: 5/7
    };
    return answer;
};

console.log(exerciseCalculator([3,0,2,4.5,0,3,1], 2));