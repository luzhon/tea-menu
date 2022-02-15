import React from 'react';
import { teaData } from "../data/TeaData";
import seedrandom from "seedrandom";
import TeaItem from './TeaItem';
import { Tea } from '../data/Tea.types';


export function TeaoftheDay() {

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
        <div style={{ marginTop: '20px' }}>
            <TeaItem tea={openedTeas[teaIndex]} />
        </div>
    );
}
