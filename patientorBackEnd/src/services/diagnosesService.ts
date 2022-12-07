import diagnoses from '../../data/diagnoses';

import { DiagnosesEntry } from '../types';

const getEntries = (): DiagnosesEntry[] => {
    return diagnoses;
};

const addDiagnoses = () => {
    return null;
};

export default {
    getEntries,
    addDiagnoses
}