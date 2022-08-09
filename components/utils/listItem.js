import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <SearchIcon />
            </ListItemIcon >
            <ListItemText primary="Search" />
        </ListItemButton>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        {/*<ListSubheader component="div" inset>*/}
        {/*    Saved*/}
        {/*</ListSubheader>*/}
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);