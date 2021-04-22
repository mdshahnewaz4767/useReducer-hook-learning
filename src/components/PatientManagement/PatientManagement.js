import React, { useReducer } from 'react';
import { patientReducer, patientState } from '../../reducers/patientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState);
    return (
        <div>
            <h1>Patient Management: {state.patients.count}</h1>
            <form action="">
                <input value=""/>
            </form>
        </div>
    );
};

export default PatientManagement;