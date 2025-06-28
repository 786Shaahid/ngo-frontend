import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { TextFieldSmall } from '../styles/typographyStyle'

const Volenteer = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = () => {
        // Process form data here
        console.log(formData);
        onClose(); // Close modal after submission
    };

    // Handle form reset
    // const handleReset = () => {
    //     setFormData({
    //         name: '',
    //         email: '',
    //         message: ''
    //     });
    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextFieldSmall
                            label="Name"
                            // variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextFieldSmall
                            label="Email"
                            // variant="outlined"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextFieldSmall
                            label="Message"
                            // variant="outlined"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={4}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>

                    <Button onClick={onClose} color="default">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Volenteer;