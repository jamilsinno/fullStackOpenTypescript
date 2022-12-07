import {Entries, Fields, Gender, Name, NewDiaryEntry, NewPatientsEntry, Occupation, Weather, Visibility} from './types';

    const isString = (text: unknown): text is string => {
        return typeof text === 'string' || text instanceof String;
    };

    const parseComment = (comment: unknown): string => {
        if (!comment || !isString(comment)) {
            throw new Error('Incorrect or missing comment');
        }
        return comment;
    }

    const isDate = (date: string): boolean => {
        return Boolean(Date.parse(date));
    };

    const parseDate = (date: unknown): string => {
        if(!date || !isString(date) || !isDate(date)) {
            throw new Error('Incorrect of missing date: ' + date);
        }
        return date;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isWeather = (param: any): param is Weather => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return Object.values(Weather).includes(param);
        };

    const parseWeather = (weather: unknown): Weather => {
        if (!weather || !isString(weather) || !isWeather(weather)) {
            throw new Error('Incorrect or missing weather: ' + weather);
        }
        return weather
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isVisibility = (param: any): param is Visibility => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return Object.values(Visibility).includes(param);
    };

    const parseVisibility = (visibility: unknown): Visibility => {
        if(!visibility || !isVisibility(visibility)) {
            throw new Error('Incorrect or missing visibility: ' + visibility );
        }
        return visibility;
    }

export const toNewDiaryEntry = ({ comment, date, weather, visibility}: Fields): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        date: parseDate(date),
        weather: parseWeather(weather),
        visibility: parseVisibility(visibility),
        comment: parseComment(comment),
    };
    return newEntry;
}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isName = (param: any): param is Name => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return Object.values(Name).includes(param);
        };

    const parseName = (name: unknown): Name => {
        if (!name || !isString(name) || !isName(name)) {
            throw new Error('Incorrect or missing name: ' + name);
        }
        return name;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isGender = (param: any): param is Gender => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return Object.values(Gender).includes(param);
        };

    const parseGender = (gender: unknown): Gender => {
        if (!gender || !isString(gender) || !isGender(gender)) {
            throw new Error('Incorrect or missing gender: ' + gender);
        }
        return gender;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isOccupation = (param: any): param is Occupation => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return Object.values(Occupation).includes(param);
        };

    const parseOccupation = (occupation: unknown): Occupation => {
        if (!occupation || !isString(occupation) || !isOccupation(occupation)) {
            throw new Error('Incorrect or missing occupation: ' + occupation);
        }
        return occupation;
    }
export const toNewPatientEntry = ({ name, dateOfBirth, gender, occupation}: Entries): NewPatientsEntry => {
    const newEntry: NewPatientsEntry = {
        name: parseName(name),
        dateOfBirth: parseDate(dateOfBirth),
        gender: parseGender(gender),
        occupation: parseOccupation(occupation),
    };
    return newEntry;
}