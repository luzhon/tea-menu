import React from 'react';
import { teaData } from "../data/TeaData";
import seedrandom from "seedrandom";
import { Tea } from '../data/Tea.types';
import mug from '../assets/mug-time.gif';
import cloud from '../assets/cloud.png';
import Drawer from '@mui/material/Drawer';


export function TeaoftheDay(props: { drawerOpen: boolean, onDrawerOpen: (open: boolean) => void }) {

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                props.onDrawerOpen(open)
            };


    const openedTeas = teaData.filter((tea: Tea) => !tea.sealed);
    const now = new Date();
    const seed = now.getMonth().toString();
    seedrandom(seed, { global: true });
    const random = Math.random();
    const shuffleArray = (array: Tea[]) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(random * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    shuffleArray(openedTeas);
    const date = now.getDate();
    const teaIndex = date >= openedTeas.length ? date % openedTeas.length : date;

    return (
        <Drawer
            anchor={'bottom'}
            open={props.drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{ sx: { backgroundColor: 'transparent', height: '200px', overflow: 'hidden' } }}
        >
            <div className="TeaoftheDay">
                <img style={{ width: "300px", height: "100px", zIndex: 2 }} src={cloud} alt="loading..." />
                <img style={{ height: "100px", marginTop: "-7px", zIndex: 1 }} src={mug} alt="loading..." />
                <p style={{ color: 'white', fontFamily: "'Kalam', cursive", position: 'absolute', top: '20px', zIndex: '2', fontSize: '20px' }}>{openedTeas[teaIndex].name} </p>
            </div>
        </Drawer >

    );
}
