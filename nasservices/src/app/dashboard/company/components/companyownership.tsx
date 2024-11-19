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
                label="Ownership Type"
                name="usertype"
                variant="outlined"
                margin="normal"
                value={formData.ownership.usertype}
                onChange={handleChange}
            />
        </Box>
    );
}