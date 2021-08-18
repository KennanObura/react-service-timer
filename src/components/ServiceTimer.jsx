
import { FormControlLabel, Switch } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import DraggableDialog from './DraggableDialog';


export default function ServiceTimer() {

    const [isServiceTimerEnabled, setServiceTimerEnabled] = useState(false);

    const toggleChecked = () => {
        setServiceTimerEnabled((prev) => !prev);
    };

    return (
        <>
            <FormControlLabel
                control={
                    <Switch
                        checked={isServiceTimerEnabled}
                        onChange={toggleChecked} />}
                label={
                    isServiceTimerEnabled
                        ? "Dissable Service Timer"
                        : "Enable Service Timer"
                }
            />
            <DraggableDialog
                isServiceTimerEnabled={isServiceTimerEnabled}
                setServiceTimerEnabled={setServiceTimerEnabled} />
        </>

    );

}