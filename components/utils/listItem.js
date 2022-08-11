import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import TopicIcon from '@mui/icons-material/Topic';
import Link from "next/link";


export const mainListItems = (
    <React.Fragment>
        <Link passHref href={'/home'}>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItemButton>
        </Link>
        <Link passHref href={'/search'}>
        <ListItemButton className="buttonItem" href="/search">
            <ListItemIcon className="itemSet">
                <SearchIcon/>
            </ListItemIcon>
            <ListItemText primary="Search"/>
        </ListItemButton>
        </Link>
        <Link passHref href={'/playlist'}>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <TopicIcon/>
            </ListItemIcon>
            <ListItemText primary="Local Playlist"/>
        </ListItemButton>
        </Link>
        <Link passHref href={'/playlist'}>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <BarChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Reports"/>
        </ListItemButton>
        </Link>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Integrations"/>
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
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Current month"/>
        </ListItemButton>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Last quarter"/>
        </ListItemButton>
        <ListItemButton className="buttonItem">
            <ListItemIcon className="itemSet">
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Year-end sale"/>
        </ListItemButton>
    </React.Fragment>
);