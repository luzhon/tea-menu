import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {teaData} from "./TeaData";
import {Tea} from "./Tea.types";
import Rating from '@mui/material/Rating';
import Circle from '@mui/icons-material/Circle';
import CircleOutlined from '@mui/icons-material/CircleOutlined';

export default function TeaList() {
  return (
    <ImageList sx={{margin: '0 100px'}}>
      {teaData.map((tea: Tea) => (
        <ImageListItem key={tea.img}>
          <img
            src={`${tea.img}?w=248&fit=crop&auto=format`}
            srcSet={`${tea.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={tea.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={tea.name}
            subtitle={<span>{tea.type.join(', ')}</span>}
            position="below"
          />
         <Rating
          sx={{marginLeft: 'calc(50% - 28px)'}}
          defaultValue={tea.caffeine}
          precision={1}
          disabled
          max={3}
          size={'small'}
          icon={<Circle fontSize="inherit" />}
          emptyIcon={<CircleOutlined fontSize="inherit" />}
        />
        </ImageListItem>
      ))}
    </ImageList>
  );
}