/* eslint-disable no-mixed-operators */
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import { teaData } from "../data/TeaData";
import { Tea } from "../data/Tea.types";
import { Filters } from '../data/Tea.types'
import TeaItem from './TeaItem';

export default function TeaList(props: { filters?: Filters }) {

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
              <TeaItem key={tea.name} tea={tea} />
            )
          } else {
            return <></>
          }
        }
        )}
      </ImageList>
    </>

  );
}