// components/companyinfo.tsx
import {  Box, Button, List, ListItem, IconButton, TextField, Typography } from '@mui/material';
import { useFormContext } from '../context/formcontext';
import { ChangeEvent, useState } from 'react';

export default function CompanyAttachments()
{
    const { formData, updateFormData } = useFormContext();
    const [attachmentDetails, setAttachmentDetails] = useState({
        name: "",
        type: "",
        expiry: "",
        attachmentUrl: "",
        reminderName: "",
        remnderdate: "",
    });

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setAttachmentDetails((prev) => ({
                ...prev,
                name: file.name,
                type: file.type,
                attachmentUrl: URL.createObjectURL(file), // Generate temporary URL for preview
            }));
        }
    };

    const handleAddAttachment = () => {
        if (attachmentDetails.name && attachmentDetails.type) {
            updateFormData("documents", [
                ...formData.documents,
                { ...attachmentDetails },
            ]);

            // Reset fields after adding the attachment
            setAttachmentDetails({
                name: "",
                type: "",
                expiry: "",
                attachmentUrl: "",
                reminderName: "",
                remnderdate: "",
            });
        }
    };

    const handleRemoveAttachment = (index: number) => {
        const updatedAttachments = formData.documents.filter((_, i) => i !== index);
        updateFormData("documents", updatedAttachments);
    };

    return(
        <Box>
            <Typography variant="h6" gutterBottom>
                Company Attachments
            </Typography>
            
            {/* File Upload */}
            <Button variant="contained" component="label" sx={{ mb: 2 }}>
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.png,.jpg"
                />
            </Button>

            {attachmentDetails.attachmentUrl && (
                <Typography variant="body2" color="textSecondary">
                    Selected File: {attachmentDetails.name} ({attachmentDetails.type})
                </Typography>
            )}

            {/* Metadata Fields */}
            <Box sx={{ mt: 2 }}>
                <TextField
                    label="Expiry Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={attachmentDetails.expiry}
                    onChange={(e) =>
                        setAttachmentDetails((prev) => ({
                            ...prev,
                            expiry: e.target.value,
                        }))
                    }
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Reminder Name"
                    fullWidth
                    value={attachmentDetails.reminderName}
                    onChange={(e) =>
                        setAttachmentDetails((prev) => ({
                            ...prev,
                            reminderName: e.target.value,
                        }))
                    }
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Reminder Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={attachmentDetails.remnderdate}
                    onChange={(e) =>
                        setAttachmentDetails((prev) => ({
                            ...prev,
                            remnderdate: e.target.value,
                        }))
                    }
                    sx={{ mb: 2 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddAttachment}
                    disabled={
                        !attachmentDetails.name ||
                        !attachmentDetails.type ||
                        !attachmentDetails.attachmentUrl ||
                        !attachmentDetails.expiry ||
                        !attachmentDetails.reminderName ||
                        !attachmentDetails.remnderdate
                    }
                >
                    Add Attachment
                </Button>
            </Box>

            {/* Display Attachments */}
            <List sx={{ mt: 4 }}>
                {formData.documents.map((attachment, index) => (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleRemoveAttachment(index)}
                            >
                                {/* <DeleteIcon /> */}
                            </IconButton>
                        }
                    >
                        <Box>
                            <Typography variant="body2">
                                <strong>Name:</strong> {attachment.name}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Type:</strong> {attachment.type}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Expiry:</strong> {attachment.expiry}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Reminder:</strong> {attachment.reminderName} ({attachment.remnderdate})
                            </Typography>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}