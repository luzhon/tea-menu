/* eslint-disable no-mixed-operators */
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { teaData } from "../data/TeaData";
import { Tea } from "../data/Tea.types";
import Rating from '@mui/material/Rating';
import Circle from '@mui/icons-material/Circle';
import CircleOutlined from '@mui/icons-material/CircleOutlined';
import { Filters } from '../data/Tea.types'
import Drawer from '@mui/material/Drawer';
import TeaDetails from './TeaDetails';

export default function TeaList(props: { filters?: Filters }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedTea, setSelectedTea] = React.useState<Tea | undefined>(undefined);

  const date = new Date().getDate();
  
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

  const handleTeaClick = (tea: Tea) => {
    setSelectedTea(tea);
    setDrawerOpen(true);
  }

  const passesFilters = (filters: Filters | undefined, tea: Tea): boolean => {
    return (
      filters === undefined ||
      (filters.brand === undefined || filters.brand === tea.brand) &&
      (filters.type === undefined || tea.type.includes(filters.type)) &&
      (filters.caffeine === undefined || filters.caffeine === tea.caffeine) &&
      (filters.sealed === undefined || filters.sealed === tea.sealed) &&
      (filters.searchTerm === undefined || tea.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || tea.ingredients.toLowerCase().includes(filters.searchTerm.toLowerCase()))
    );
  }
  const data = teaData.filter(tea => passesFilters(props.filters, tea)).sort((a, b) => (a.name > b.name) ? 1 : -1);

  return (
    <>
      <ImageList sx={{ overflowX: 'hidden' }}>
        {data.map((tea: Tea) => {
          if (passesFilters(props.filters, tea)) {
            return (
              <ImageListItem key={tea.img} onClick={() => handleTeaClick(tea)} sx={{ width: '200px', height: '300px', alignItems: 'center', marginBottom: '15px' }}>
                <img
                  style={{ width: "180px" }}
                  src={`${tea.img}`}
                  alt={tea.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={tea.name}
                  subtitle={<span>{tea.type.join(', ')}</span>}
                  position="below"
                />
                <Rating
                  defaultValue={tea.caffeine}
                  precision={1}
                  disabled
                  max={3}
                  size={'small'}
                  icon={<Circle fontSize="inherit" />}
                  emptyIcon={<CircleOutlined fontSize="inherit" />}
                />
              </ImageListItem>);
          } else {
            return <></>
          }
        }
        )}
      </ImageList>
      <Drawer
        anchor={'bottom'}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <TeaDetails tea={selectedTea} />
      </Drawer>
    </>

  );
}