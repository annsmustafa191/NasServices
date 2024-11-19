// components/companyinfo.tsx
import { Button, Box, TextField, Typography } from '@mui/material';
import { useFormContext } from '../context/formcontext';

export default function CompanyInfo() {
    const { formData, updateFormData } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData('companyInfo', { [e.target.name]: e.target.value });
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            updateFormData('companyInfo', { companylogo: file.name }); // Save file name or data
        }
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
                label="Company Owner Name"
                name="companyOwnerName"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.companyOwnerName}
                onChange={handleChange}
                placeholder="Enter company owner name"
            />
            <TextField
                fullWidth
                label="Company Registration Number"
                name="comericalRegisterationNumer"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.comericalRegisterationNumer}
                onChange={handleChange}
                placeholder="Enter company registeration Number"
            />
            <TextField
                fullWidth
                label="Company Email"
                name="email"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.email}
                onChange={handleChange}
                placeholder="Enter company email"
            />
            <TextField
                fullWidth
                label="Country / City"
                name="country"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.country}
                onChange={handleChange}
                placeholder="Enter Country/City Name"
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
            <TextField
                fullWidth
                label="Company phoneNumber"
                name="phoneNumber"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.phoneNumber}
                onChange={handleChange}
                placeholder="Enter company phoneNumber"
            />
            <Box mt={2}>
                <Typography variant="body1" gutterBottom>
                    Upload Company Logo
                </Typography>
                <Button
                    variant="contained"
                    component="label"
                    sx={{ display: 'block', marginBottom: '16px' }}
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={handleFileUpload}
                        accept=".pdf,.doc,.docx,.png,.jpg" // Accept specific file types
                    />
                </Button>
                {formData.companyInfo.companylogo && (
                    <Typography variant="body2" color="textSecondary">
                        Uploaded: {formData.companyInfo.companylogo}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
