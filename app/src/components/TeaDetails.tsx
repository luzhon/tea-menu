import * as React from 'react';
import Box from '@mui/material/Box';
import { Tea } from "../data/Tea.types";
import './../App.css';


export default function TeaDetails(props: { tea?: Tea }) {
    return (
        <Box
            sx={{ width: 'auto', height: '50%', margin: '15px 10px 25px 10px' }}
            role="presentation"
        >
            <header className="TeaHeader">Name</header>
            <header>{props.tea?.name}</header>
            <header className="TeaHeader">Brand</header>
            <header>{props.tea?.brand}</header>
            <header className="TeaHeader">Type</header>
            <header>{props.tea?.type.join(', ')}</header>
            <header className="TeaHeader">Ingredients</header>
            <header>{props.tea?.ingredients}</header>
        </Box>)
}