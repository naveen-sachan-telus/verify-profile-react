import React, { useState } from 'react';
import { TextField, Radio, RadioGroup, FormControlLabel, Button, FormControl, FormLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles = makeStyles({
    container: {
        margin: '0 auto',
        padding: '3% 8%',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
    },
    backLink: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        cursor: 'pointer',
        color: '#333',
    },
    backIcon: {
        fontSize: '17px !important',
        marginRight: '5px',
    },
    titleContainer: {
        padding: '20px',
        backgroundColor: '#eef3fc',
        border: '1px solid gainsboro',
        textAlign: 'left',
    },
    title: {
        marginLeft: '5px !important',
        marginBottom: '10px !important',
        fontSize: '38px !important',
        color: '#631072',
    },
    descriptionContainer: {
        padding: '20px',
        backgroundColor: '#ffffff',
        border: '1px solid gainsboro',
        borderTopColor: '#ffffff',
        marginBottom: '20px',
        textAlign: 'left',
    },
    description: {
        color: '#666',
    },
    formFields: {
        textAlign: 'left',
    },
    formHeading: {
        marginTop: '40px',
        marginBottom: '0px'
    },
    inputField: {
        width: '300px',
        marginBottom: '20px',
    },
    radioGroup: {
        width: '100%',
        marginBottom: '15px !important',
    },
    button: {
        width: '135px',
        height: '45px',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#4caf50 !important',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#45a049',
        },
        borderRadius: '20px !important'
    },
    radio: {
        '&.Mui-checked': {
            color: '#631072 !important',
        },
    },
});

const PhoneVerificationForm = () => {
    const classes = useStyles();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [method, setMethod] = useState('sms');
    const [error, setError] = useState(false);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleMethodChange = (event) => {
        setMethod(event.target.value);
    };

    const handleSubmit = () => {
        const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneNumberPattern.test(phoneNumber)) {
            setError(true);
            return;
        }
        setError(false);
        console.log({ phoneNumber, method });
    };

    return (
        <div className={classes.container}>
            <div className={classes.backLink} onClick={() => console.log('Back to verify profile')}>
                <ArrowBackIcon className={classes.backIcon} />
                <Typography variant="body1" component="span">Back to verify profile</Typography>
            </div>
            <div className={classes.titleContainer}>
                <Typography className={classes.title}>Add your contact phone number</Typography>
            </div>
            <div className={classes.descriptionContainer}>
                <Typography className={classes.description}>
                    We'll contact you by text message or phone call about account updates for your home products and services, for verification when calling in and for exclusive offers or surveys.
                </Typography>
            </div>
            <div className={classes.formFields}>
                <h3 className={classes.formHeading}>Enter your contact phone number</h3>
                <div>mobile phone number preferred</div>
                <TextField
                    className={classes.inputField}
                    variant="outlined"
                    value={phoneNumber}
                    placeholder='123-456-7890'
                    onChange={handlePhoneNumberChange}
                    error={error}
                    helperText={error ? 'Please enter a valid phone number in the format xxx-xxx-xxxx' : ''}
                />
                <FormControl component="fieldset" className={classes.radioGroup}>
                    <h3 className={classes.formHeading}>We'll send you a code to confirm this phone number. Where should we send it?</h3>
                    <RadioGroup aria-label="method" name="method" value={method} onChange={handleMethodChange}>
                        <FormControlLabel value="sms" control={<Radio classes={{ checked: classes.radio }} />} label="Text message" />
                        <FormControlLabel value="call" control={<Radio classes={{ checked: classes.radio }} />} label="Phone call" />
                    </RadioGroup>
                </FormControl>
                <Button variant="contained" className={classes.button} onClick={handleSubmit}>
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default PhoneVerificationForm;
