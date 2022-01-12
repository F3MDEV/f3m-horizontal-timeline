import React from 'react';
import timelineData from '../data'
import TimelineItem from './TimelineItem';
import './timeline.css';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CogWheelsIcon from '../assets/cogWheels';
import IconButton from '@mui/material/IconButton';
import { Checkbox, FormControlLabel, Menu, MenuItem } from '@mui/material';
import Divider from '@mui/material/Divider';
import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Timeline = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

const MenuItemTimeline = styled(MenuItem)(({ theme }) => ({
    '&.MuiButtonBase-root.MuiMenuItem-root': {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 4,
        '& .MuiTypography-root':{
            fontSize: 14,
            color: '#444444',
        },
        '& +.MuiDivider-root' :{
            marginTop: 6,
            marginBottom: 6
        },
        '& .MuiCheckbox-root' :{
            paddingTop: 4,
            paddingBottom: 4
        }
    },
}));

const MenuItemTypeCircle = styled(Box)(({ theme }) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    marginLeft: 'auto',
    marginRight: 5
}));

    return(
        <>
            {timelineData.length > 0 && (
                    <div style={{display: 'flex', width: '100%'}}>
                        <IconButton 
                            color="primary" 
                            aria-label="upload picture" 
                            component="span"
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            >
                            <CogWheelsIcon sx={{ color: '#04a0aa' }}></CogWheelsIcon>
                        </IconButton>

                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            
                            sx={{top: 0,
                                left: -5}}
                        >
                            <MenuItemTimeline onClick={handleClose}>
                                <FormControlLabel 
                                    value="Mostrar Tudo"
                                    control={<Checkbox size="small"/>}
                                    label="Mostrar Tudo"
                                    labelPlacement="end"
                                />
                               
                            </MenuItemTimeline>
                            <Divider></Divider>
                            <MenuItemTimeline onClick={handleClose}>
                                <FormControlLabel
                                    value="Prescrição"
                                    control={<Checkbox size="small"/>}
                                    label="Prescrição"
                                    labelPlacement="end"
                                />
                                <MenuItemTypeCircle sx={{backgroundColor: '#4199e0'}}></MenuItemTypeCircle>
                            </MenuItemTimeline>
                            <MenuItemTimeline onClick={handleClose}>
                                <FormControlLabel
                                    value="Avaliações"
                                    control={<Checkbox size="small"/>}
                                    label="Avaliações"
                                    labelPlacement="end"
                                />
                                <MenuItemTypeCircle sx={{backgroundColor: '#ffd500'}}></MenuItemTypeCircle>
                            </MenuItemTimeline>
                            <MenuItemTimeline onClick={handleClose}>
                                <FormControlLabel
                                    value="Diagnósticos"
                                    control={<Checkbox size="small"/>}
                                    label="Diagnósticos"
                                    labelPlacement="end"
                                />
                                <MenuItemTypeCircle sx={{backgroundColor: '#4caf50'}}></MenuItemTypeCircle>
                            </MenuItemTimeline>
                            <MenuItemTimeline onClick={handleClose}>
                                <FormControlLabel
                                    value="Diários"
                                    control={<Checkbox size="small"/>}
                                    label="Diários"
                                    labelPlacement="end"
                                />
                                <MenuItemTypeCircle sx={{backgroundColor: '#f15a29'}}></MenuItemTypeCircle>
                            </MenuItemTimeline>
                            <MenuItemTimeline onClick={handleClose}>
                                <FormControlLabel
                                    value="Vários"
                                    control={<Checkbox size="small" sx={{visibility: 'hidden'}}/>}
                                    label="Vários"
                                    labelPlacement="end"
                                />
                                <MenuItemTypeCircle sx={{backgroundColor: '#999999'}}></MenuItemTypeCircle>
                            </MenuItemTimeline>
                        </Menu>
    
                        <FirstPageIcon fontSize="large" sx={{ color: '#04a0aa' }}></FirstPageIcon>
                        <ChevronLeftIcon fontSize="large" sx={{ color: '#04a0aa' }}></ChevronLeftIcon>
                            <div className='timeline-container'>
                                {timelineData.map((data: any, idx: React.Key | null | undefined) => (
                                    <TimelineItem data={data} key={idx}/>
                                ))}
                            </div>
                        <ChevronRightIcon fontSize="large" sx={{ color: '#04a0aa' }}></ChevronRightIcon>
                        <LastPageIcon fontSize="large" sx={{ color: '#04a0aa' }}></LastPageIcon>
                    </div>
                
            )}
        </>
    )
}

export default Timeline;