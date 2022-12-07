import patientsData from '../../data/patients';

import { NewPatientsEntry, PatientsEntry, NonSensitivePatientsEntry } from '../types';
import { v1 as uuid } from 'uuid';

const id = uuid();

const getEntries = (): PatientsEntry[] => {
    return patientsData;
};

const getNonSensitiveEntries = (): NonSensitivePatientsEntry[] => {
    return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const addPatient = (entry: NewPatientsEntry): PatientsEntry => {
    const newPatientsEntry = {
        id: id,
        ...entry
    }

    patientsData.push(newPatientsEntry);
    return newPatientsEntry;
};

export default {
    getEntries,
    addPatient,
    getNonSensitiveEntries
}