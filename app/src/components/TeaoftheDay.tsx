import React from 'react';
import { teaData } from "../data/TeaData";
import seedrandom from "seedrandom";
import TeaItem from './TeaItem';


export function TeaoftheDay() {

    const date = new Date();
    const seed = date.getDate().toString() + date.getMonth().toString();
    seedrandom(seed, { global: true });
    const random = Math.random();
    const randomTeaIndex = Math.floor(random * teaData.length);

    return (
        <div style={{ marginTop: '20px' }}>
            <TeaItem tea={teaData[randomTeaIndex]} />
        </div>
    );
}
