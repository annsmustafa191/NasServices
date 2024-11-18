import { Button, TextField, Box } from '@mui/material';
import { useFormContext } from '../context/formcontext';
import { useState } from 'react';

export default function CompanyOwnership()
{
    const { formData, updateFormData } = useFormContext();
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData('ownership', { [e.target.name]: e.target.value });
    };

    

    return (
        <Box>
            <TextField
                fullWidth
                label="Owner Name"
                name="ownerName"
                variant="outlined"
                margin="normal"
                value={formData.ownership.ownerName}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                label="Ownership Percentage"
                name="ownerPercentage"
                variant="outlined"
                margin="normal"
                type="number"
                value={formData.ownership.ownerPercentage}
                onChange={handleChange}
            />
        </Box>
    );
}