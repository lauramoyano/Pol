import React from 'react';


// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Grid,
    
} from '@material-ui/core';
import MuiTypography from '@material-ui/core/Typography';

import SubCard from '../../ui-component/cards/SubCard';
import { gridSpacing } from '../../store/constant';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

// project imports
import AnimateButton from '../../ui-component/extended/AnimateButton';

// style constant
const useStyles = makeStyles((theme) => ({
    redButton: {
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        color: theme.palette.grey[700],
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem'
        }
    },
    signDivider: {
        flexGrow: 1
    },
    signText: {
        cursor: 'unset',
        margin: theme.spacing(2),
        padding: '5px 56px',
        borderColor: theme.palette.grey[100] + ' !important',
        color: theme.palette.grey[900] + '!important',
        fontWeight: 500
    },
    loginIcon: {
        marginRight: '16px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '8px'
        }
    },
    loginInput: {
        ...theme.typography.customInput
    }
}));

//============================|| API JWT - LOGIN ||============================//

// ... (tus imports)

const Data = (props, { ...others }) => {
    const classes = useStyles();
    const [initialNumbers, setInitialNumbers] = React.useState([-2, -1, 0, 1, 2]);

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    // Inicializa los valores según el número de elementos en initialNumbers
                    ...initialNumbers.reduce((acc, number) => {
                        acc[number] = '';
                        return acc;
                    }, {})
                }}
                validationSchema={Yup.object().shape({
                    // ... (tu esquema de validación)
                })}
                onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
                    // ... (lógica de envío del formulario)
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6}>
                                <SubCard title="Insert Data">
                                    <Grid item>
                                        <MuiTypography variant="h1" gutterBottom>
                                            Insert your manually data here
                                        </MuiTypography>
                                    </Grid>
                                    {initialNumbers.map((number, index) => (
                                        <Grid item key={number}>
                                            <MuiTypography variant="h4" gutterBottom>
                                                {number}
                                            </MuiTypography>
                                            <FormControl
                                                fullWidth
                                                error={Boolean(touched[number] && errors[number])}
                                                className={classes.loginInput}
                                            >
                                                <InputLabel htmlFor={`outlined-adornment-email-login-${number}`}>
                                                    Number
                                                </InputLabel>
                                                <OutlinedInput
                                                    id={`outlined-adornment-email-login-${number}`}
                                                    type="number"
                                                    value={values[number]}
                                                    name={String(number)} // Usa el número como nombre dinámico
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    label="Number Bin"
                                                    inputProps={{
                                                        classes: {
                                                            notchedOutline: classes.notchedOutline
                                                        }
                                                    }}
                                                />
                                                {touched[number] && errors[number] && (
                                                    <FormHelperText
                                                        error
                                                        id={`standard-weight-helper-text-email-login-${number}`}
                                                    >
                                                        {' '}
                                                        {errors[number]}{' '}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                    ))}
                                    {errors.submit && (
                                        <Box sx={{ mt: 3 }}>
                                            <FormHelperText error>{errors.submit}</FormHelperText>
                                        </Box>
                                    )}
                                    <Box sx={{ mt: 2 }}>
                                        <AnimateButton>
                                            <Button
                                                disableElevation
                                                disabled={isSubmitting}
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Upload Data
                                            </Button>
                                        </AnimateButton>
                                    </Box>
                                </SubCard>
                            </Grid>
                       
                        <Grid item xs={12} sm={6}>
                    <SubCard title="Upload File *csv">
                        <Grid container direction="column" spacing={1}>
                           <Grid item>
                                        <MuiTypography variant="h1" gutterBottom>
                                            Insert your file here
                                        </MuiTypography>
                                    </Grid>
                            <Grid item>
                            <Box sx={{ mt: 2 }}>
                                        <AnimateButton>
                                            <Button
                                                disableElevation
                                                disabled={isSubmitting}
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Add File
                                            </Button>
                                        </AnimateButton>
                                    </Box>
                            </Grid>
                        </Grid>
                    </SubCard>
                    </Grid>
                </Grid>
                    </form>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default Data;
