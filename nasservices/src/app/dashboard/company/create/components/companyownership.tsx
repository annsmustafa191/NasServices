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
                name="userName"
                variant="outlined"
                margin="normal"
                value={formData.ownership.userName}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                label="Ownership Type"
                name="userType"
                variant="outlined"
                margin="normal"
                value={formData.ownership.userType}
                onChange={handleChange}
            />
        </Box>
    );
}