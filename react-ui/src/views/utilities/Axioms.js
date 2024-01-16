import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Box, Card, Grid } from '@material-ui/core';

// project imports
import SubCard from '../../ui-component/cards/SubCard';
import MainCard from '../../ui-component/cards/MainCard';
import SecondaryAction from '../../ui-component/cards/CardSecondaryAction';
import { gridSpacing } from '../../store/constant';
import { Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Chart from 'react-apexcharts';

//===============================|| SHADOW BOX ||===============================//

const ShadowBox = ({ shadow }) => {
    const theme = useTheme();

    return (
        <Card sx={{ mb: 3, boxShadow: shadow }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3,
                    bgcolor: theme.palette.primary.light,
                    color: theme.palette.grey[800]
                }}
            >
                <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
            </Box>
        </Card>
    );
};

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

//============================|| UTILITIES SHADOW ||============================//

const UtilitiesShadow = () => {
    const theme = useTheme();
    const charFirstAxiom = {
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: ['', '', 'x', '', 'y']
        },
        yaxis: {
            labels: {
                show: false
            },
            forceNiceScale: true,
            min: 0,
            max: 20, // Ajusta este valor según tus necesidades
            floating: false,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: '#304758',
                width: 2,
                offsetX: 0,
                offsetY: 0
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                // Aquí puedes definir tus propias etiquetas para los valores
                const labels = ['', '', 'q', ' ⮕ ⬅', 'q']; // Reemplaza estas etiquetas con las tuyas
                return labels[opts.dataPointIndex];
            },
            offsetY: 10, // Ajusta este valor para mover las etiquetas hacia arriba o hacia abajo
            style: {
                fontSize: '12px',
                colors: [theme.palette.common.black]
            }
        }
    };

    const charFirstSeries = [
        {
            name: 'Frecuencias',
            data: [0, 0, 5, 0, 5], // Reemplaza estos números con tus datos reales
            color: theme.palette.primary.main
        }
    ];
    const charSecondAxiom = {
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: ['0', '', 'x', '', 'y']
        },
        yaxis: {
            labels: {
                show: false
            },
            forceNiceScale: true,
            min: 0,
            max: 20, // Ajusta este valor según tus necesidades
            floating: false,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: '#304758',
                width: 2,
                offsetX: 0,
                offsetY: 0
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                // Aquí puedes definir tus propias etiquetas para los valores
                const labels = ['p', '', 'q', ' ⮕ ', 'r']; // Reemplaza estas etiquetas con las tuyas
                return labels[opts.dataPointIndex];
            },
            offsetY: 10, // Ajusta este valor para mover las etiquetas hacia arriba o hacia abajo
            style: {
                fontSize: '12px',
                colors: [theme.palette.common.black]
            }
        }
    };

    const charSecondSeries = [
        {
            name: 'Frecuencias',
            data: [15, 0, 5, 0, 10], // Reemplaza estos números con tus datos reales
            color: theme.palette.primary.main
        }
    ];
    const charThirdAxiom = {
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: ['0', 'd', 'x', 'd', 'y']
        },
        yaxis: {
            labels: {
                show: false
            },
            forceNiceScale: true,
            min: 0,
            max: 20, // Ajusta este valor según tus necesidades
            floating: false,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: '#304758',
                width: 2,
                offsetX: 0,
                offsetY: 0
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                // Aquí puedes definir tus propias etiquetas para los valores
                const labels = ['p', ' ⬅', 'q', ' ⮕ ', 'r']; // Reemplaza estas etiquetas con las tuyas
                return labels[opts.dataPointIndex];
            },
            offsetY: 10, // Ajusta este valor para mover las etiquetas hacia arriba o hacia abajo
            style: {
                fontSize: '12px',
                colors: [theme.palette.common.black]
            }
        }
    };

    const charThirdSeries = [
        {
            name: 'Frecuencias',
            data: [5, 0, 15, 0, 5], // Reemplaza estos números con tus datos reales
            color: theme.palette.primary.main
        }
    ];

    return (
        <MainCard title="Axioms" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard title="E&R Axioms">
                        <Grid container spacing={gridSpacing}>
                            <Box margin={2}>
                                <Typography variant="h3" component="h3">
                                    Axiom 1:
                                </Typography>
                                <Grid item xs={12} sm={6}>
                                    <Chart options={charFirstAxiom} series={charFirstSeries} type="bar" width="100%" />
                                </Grid>
                                <Typography variant="body2" component="p" style={{ whiteSpace: 'pre-line' }}>
                                    {
                                        ' Data: p, q >> 0, p > q, 0 < x < y.\n Statement: Fix p > 0 and x > 0. \n There exists c > 0 and y > 0 possibly depend- ing on p and x) such that if b{x, y) < s and q < y p, then the joining of the two q masses at their mid-point, x + y)/2, increases polarization. \n\n The intuition behind this axiom should be very clear. The two right hand masses are individually smaller than p (see Data). Moreover, they are “very close” to each other (see Statement). In such a case, by pooling the two small masses we “identify” them while not changing the average distance from the third mass. This should therefore raise polarization'
                                    }
                                </Typography>
                            </Box>
                            <Box margin={2}>
                                <Typography variant="h3" component="h3">
                                    Axiom 2:
                                </Typography>

                                <Grid item xs={12} sm={6}>
                                    <Chart options={charSecondAxiom} series={charSecondSeries} type="bar" width="100%"/>
                                </Grid>
                                <Typography variant="body2" component="p" style={{ whiteSpace: 'pre-line' }}>
                                    {
                                        ' Data: (p, q, r) >> 0, p > r, x > | y — z|.\n Statement: There is c > 0 such that if the population mass q is moved to the right (towards r) by an amount not exceeding e, polarization goes up. \n\n This is also an intuitive axiom. The intermediate point mass q is at least as close to the r-mass as it is to the p-mass. Additionally, the p-mass is larger than the r-mass. So if only small locational changes in the q-mass are permitted, the direction that brings it closer to the nearer and smaller mass should raise polarization.'
                                    }
                                </Typography>
                            </Box>
                            <Box margin={2}>
                                <Typography variant="h3" component="h3">
                                    Axiom 3:
                                </Typography>
                                <Grid item xs={12} sm={6}>
                                    <Chart options={charThirdAxiom} series={charThirdSeries} type="bar" width="100%" />
                                </Grid> 
                                <Typography variant="body2" component="p" style={{ whiteSpace: 'pre-line' }}>
                                    {
                                        ' Data: (p, q) >> 0, x = y — x - d. \n Statement: Any new distribution fomied by shifting population mass from the central mass q equally to the two lateral masses p, each d units of distance array, must increase polarization. \n\n This axiom is so intuitive it hardly requires comment. The axiom states that the disappearance of a “middle class” into the “rich” and “poor” categories must increase polarization.'
                                    }
                                </Typography>
                            </Box>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UtilitiesShadow;
