import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Grid } from '@material-ui/core';
import MuiTypography from '@material-ui/core/Typography';

import SubCard from '../../ui-component/cards/SubCard';
import { gridSpacing } from '../../store/constant';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from '../../ui-component/extended/AnimateButton';
import MainCard from '../../ui-component/cards/MainCard';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';

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
    const measures = ['E&R measure', 'Frank measure', 'Carlos measure', 'Experts measure'];
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const forms = {
        'E&R measure': (
            <div>
                 <Box mb={2}>
            <TextField
                id="K"
                label="K"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </Box>
             <Box mb={2}>
            <TextField
                id="alpha"
                label="Alpha"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </Box>
             <Box mb={2}>
            <TextField
                id="distance"
                label="Distance"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </Box>
        </div>
        ),
        'Frank measure': (
            <div>
                 <Box mb={2}>
            <TextField
                id="alpha"
                label="alpha"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </Box>
             <Box mb={2}>
            <TextField
                id="Beta"
                label="Beta"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </Box>
             <Box mb={2}>
            <TextField
                id="y"
                label="y"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </Box>
        </div>
        ),
        'Carlos measure': (
            <div>
            
            </div>
        ),
        'Experts measure': (
            <div>
               
            </div>
        ),
    };
    const [currentForm, setCurrentForm] = React.useState(null);

    const handleClick = () => {
        console.info(`You clicked ${measures[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setCurrentForm(forms[measures[index]]);

        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

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
                        <MainCard title="Upload data and select algorithm">
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} sm={6}>
                                    <SubCard title="Insert Data">
                                        <Grid container direction="column" spacing={1}>
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
                                                        <InputLabel htmlFor={`outlined-adornment-email-login-${number}`}>Number</InputLabel>
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
                                                            <FormHelperText error id={`standard-weight-helper-text-email-login-${number}`}>
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
                                        </Grid>
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
                                    <Box mt={4}>
                                        <SubCard title="Select the measure">
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item>
                                                <MuiTypography variant="h1" gutterBottom>
                                                    Select your measure here
                                                </MuiTypography>
                                                </Grid>

                                                <Grid item>
                                                <Box sx={{ mt: 2 }}>
                                                    <ButtonGroup
                                                        variant="contained"
                                                        fullWidth
                                                        color="primary"
                                                        size="large"                                            
                                                        ref={anchorRef}
                                                        aria-label="split button"
                                                    >
                                                        <Button onClick={handleClick}>{measures[selectedIndex]}</Button>
                                                        <Button
                                                            color="primary"
                                                            size="large"
                                                            aria-controls={open ? 'split-button-menu' : undefined}
                                                            aria-expanded={open ? 'true' : undefined}
                                                            aria-label="select merge strategy"
                                                            aria-haspopup="menu"
                                                            onClick={handleToggle}
                                                        >
                                                            <ArrowDropDownIcon />
                                                        </Button>
                                                    </ButtonGroup>
                                                    <Popper
                                                        open={open}
                                                        anchorEl={anchorRef.current}
                                                        role={undefined}
                                                        transition
                                                        disablePortal
                                                    >
                                                        {({ TransitionProps, placement }) => (
                                                            <Grow
                                                                {...TransitionProps}
                                                                style={{
                                                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                                                                }}
                                                            >
                                                                <Paper>
                                                                    <ClickAwayListener onClickAway={handleClose}>
                                                                        <MenuList id="split-button-menu">
                                                                            {measures.map((option, index) => (
                                                                                <MenuItem
                                                                                    key={option}                                                                        
                                                                                    selected={index === selectedIndex}
                                                                                    onClick={(event) => handleMenuItemClick(event, index)}
                                                                                >
                                                                                    {option}
                                                                                </MenuItem>
                                                                            ))}
                                                                        </MenuList>
                                                                    </ClickAwayListener>
                                                                </Paper>
                                                            </Grow>
                                                        )}
                                                    </Popper>
                                                    
                                                    </Box>
                                                    <Box sx={{ mt: 4 }}>
                                                        {currentForm}
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </SubCard>
                                    </Box>
                                </Grid>
                            </Grid>
                        </MainCard>
                    </form>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default Data;
