// components/companyinfo.tsx
import { TextField, Box } from '@mui/material';
import { useFormContext } from '../context/formcontext';

export default function CompanyInfo() {
    const { formData, updateFormData } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData('companyInfo', { [e.target.name]: e.target.value });
    };

    return (
        <Box>
            <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
            />
            <TextField
                fullWidth
                label="Company Address"
                name="companyAddress"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.companyAddress}
                onChange={handleChange}
                placeholder="Enter company address"
            />
        </Box>
    );
}
