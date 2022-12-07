export enum Weather{
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy'
} 
export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
} 

export enum Gender {
    Male = 'male',
    Female = 'female'
}

export enum Name {
    John = 'John McClane',
    Martin = 'Martin Riggs',
    Hans = 'Hans Gruber',
    Dana = 'Dana Scully',
    Matti = 'Matti Luukkainen'
}

export enum Occupation{
    NewYorkCop = 'new york city cop',
    Cop = 'cop',
    Technician = 'technician',
    ForensicPathologist = 'forensic pathologist',
    DigitalEvangelist = 'digital evangelist'
}

export interface DiaryEntry {
    id: number;
    date: string; 
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">;
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

export interface DiagnosesEntry {
    code: string;
    name: string;
    latin?: string;
};

export interface PatientsEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn?: string;
    gender: string;
    occupation: string;
};

export type NonSensitivePatientsEntry = Omit<PatientsEntry, "ssn">;
export type NewPatientsEntry = Omit<PatientsEntry, 'id'>;

export type Fields = {comment: unknown, date: unknown, weather:unknown, visibility: unknown};
export type Entries = { name: unknown, dateOfBirth:unknown, gender: unknown, occupation: unknown};