import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { teaData } from "./TeaData";
import { Tea } from "./Tea.types";
import Rating from '@mui/material/Rating';
import Circle from '@mui/icons-material/Circle';
import CircleOutlined from '@mui/icons-material/CircleOutlined';
import { Filters } from './Tea.types'

export default function TeaList(props: { filters?: Filters }) {

  const passesFilters = (filters: Filters, tea: Tea): boolean => {
    return (
      filters == undefined ||
      (filters.brand == undefined || filters.brand == tea.brand) &&
      (filters.type == undefined || tea.type.includes(filters.type)) &&
      (filters.caffeine == undefined || filters.caffeine == tea.caffeine) &&
      (filters.sealed == undefined || filters.sealed == tea.sealed) &&
      (filters.searchTerm == undefined || tea.name.includes(filters.searchTerm) || tea.ingredients.includes(filters.searchTerm))
    );
  }

  return (
    <ImageList>
      {teaData.map((tea: Tea) => {
        if (passesFilters(props.filters, tea)) {
          return (
            <ImageListItem key={tea.img} sx={{ width: '200px', height: '300px' }}>
              <img
                src={`${tea.img}?size=248&fit=scale&auto=format`}
                srcSet={`${tea.img}?size=248&fit=scale&auto=format&dpr=2 2x`}
                alt={tea.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={tea.name}
                subtitle={<span>{tea.type.join(', ')}</span>}
                position="below"
              />
              <Rating
                sx={{ marginLeft: 'calc(50% - 28px)' }}
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
  );
}