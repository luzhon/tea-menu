import React from 'react';
import TeaList from './TeaList'
import HeaderBar from './HeaderBar'
import { Filters } from './Tea.types'


export function WholeDarnApp() {
  const [filters, setFilters] = React.useState(undefined);

  return (
    <>
      <header className="AppHeader">Lulu's Tea Menu</header>
      <HeaderBar onChange={(filters: Filters) => {
          setFilters(filters)}
      }/>
      <TeaList filters={filters}/>
    </>
  );
}
