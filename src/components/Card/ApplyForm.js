import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { applyJob } from '../../api/jobs/JobServices';

const ApplyForm = ({ open, handleClose, jobTitle, jobId }) => {
    const [email, setEmail] = useState('');
    const [document, setDocument] = useState(null);
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleDocumentChange = (event) => {
      setDocument(event.target.files[0]);
    };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('document', document);
    await applyJob(jobId, formData);
    handleClose(); // Close the dialog after form submission
  };

  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Apply for {jobTitle}</DialogTitle>
    <form onSubmit={handleSubmit}>
      <DialogContent>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="file"
          accept="application/pdf" // Specify accepted file types (e.g., PDF)
          onChange={handleDocumentChange}
          style={{ marginTop: '16px' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </form>
  </Dialog>
  );
};

export default ApplyForm;
