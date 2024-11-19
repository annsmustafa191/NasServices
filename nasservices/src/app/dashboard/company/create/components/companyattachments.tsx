import { Box, Button, List, ListItem, IconButton, TextField, Typography } from '@mui/material';
import { useFormContext } from '../context/formcontext';
import { ChangeEvent, useState, useEffect } from 'react';

export default function CompanyAttachments() {
    const { formData, updateFormData } = useFormContext();
    const [attachmentDetails, setAttachmentDetails] = useState({
        id: '', // Unique identifier
        name: '',
        type: '',
        expiry: '',
        attachmentUrl: '',
        reminderName: '',
        remnderdate: '',
    });

    // Log attachmentDetails after state updates
    useEffect(() => {
        console.log("Updated Attachment Details --->", attachmentDetails);
    }, [attachmentDetails]);

    // Handle file upload
    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        console.log("Handle FileUpload is called --->", file);
        if (file) {
            setAttachmentDetails((prev) => ({
                ...prev,
                id: Date.now().toString(), // Generate unique ID
                name: file.name,
                type: file.type,
                attachmentUrl: URL.createObjectURL(file), // Generate temporary URL for preview
            }));
        }
    };

    // Add attachment to documents
    const handleAddAttachment = () => {
        console.log("Form Data Before Adding --->", formData.documents);
        console.log("Attachment Detail Before Adding --->", attachmentDetails);

        const isDuplicate = formData.documents.some(
            (doc) =>
                doc.name === attachmentDetails.name &&
                doc.type === attachmentDetails.type &&
                doc.expiry === attachmentDetails.expiry &&
                doc.reminderName === attachmentDetails.reminderName &&
                doc.remnderdate === attachmentDetails.remnderdate
        );

        if (!isDuplicate && attachmentDetails.name && attachmentDetails.type) {
            updateFormData('documents', [
                ...formData.documents,
                { ...attachmentDetails },
            ]);

            console.log("Form Data After Adding --->", [
                ...formData.documents,
                { ...attachmentDetails },
            ]);

            // Reset fields after adding the attachment
            setAttachmentDetails({
                id: '',
                name: '',
                type: '',
                expiry: '',
                attachmentUrl: '',
                reminderName: '',
                remnderdate: '',
            });

            // Reset file input
            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
            if (fileInput) fileInput.value = '';
        }
    };

    // Remove attachment by index
    const handleRemoveAttachment = (index: number) => {
        const updatedAttachments = formData.documents.filter((_, i) => i !== index);
        updateFormData('documents', updatedAttachments);
    };

    return (
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
                        key={attachment.id || index} // Use unique ID or index
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
                                <strong>Reminder:</strong> {attachment.reminderName} (
                                {attachment.remnderdate})
                            </Typography>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
