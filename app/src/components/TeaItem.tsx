/* eslint-disable no-mixed-operators */
import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Tea, TeaTypeColor } from "../data/Tea.types";
import Rating from '@mui/material/Rating';
import Circle from '@mui/icons-material/Circle';
import CircleOutlined from '@mui/icons-material/CircleOutlined';
import Drawer from '@mui/material/Drawer';
import TeaDetails from './TeaDetails';

export default function TeaItem(props: { tea: Tea }) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

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

                setDrawerOpen(open)
            };

    const handleTeaClick = () => {
        setDrawerOpen(true);
    }

    return (
        <>
            <ImageListItem key={props.tea.img} onClick={() => handleTeaClick()} sx={{ width: '200px', height: '300px', alignItems: 'center', marginBottom: '25px' }}>
                <img
                    style={{ width: "170px", clipPath: "circle(85px at center)" }}
                    src={`${props.tea.img}`}
                    alt={props.tea.name}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={props.tea.name}
                    //subtitle={<span>{props.tea.type.join(', ')}</span>}
                    position="below"
                />
                <Rating
                    defaultValue={props.tea.caffeine}
                    precision={1}
                    disabled
                    max={3}
                    size={'small'}
                    style={{ marginTop: "-5px" }}
                    icon={<Circle style={{ color: TeaTypeColor[props.tea.type[0]] }} fontSize="inherit" />}
                    emptyIcon={<CircleOutlined style={{ color: TeaTypeColor[props.tea.type[0]] }} fontSize="inherit" />}
                />
            </ImageListItem>
            <Drawer
                anchor={'bottom'}
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <TeaDetails tea={props.tea} />
            </Drawer>
        </>
    );
}