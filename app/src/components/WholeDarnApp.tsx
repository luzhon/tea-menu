import React from 'react';
import TeaList from './TeaList'
import HeaderBar from './HeaderBar'
import { Filters } from '../data/Tea.types'


export function WholeDarnApp() {
  const [filters, setFilters] = React.useState<Filters | undefined>(undefined);

  return (
    <>
      <header className="AppHeader">Lulu's Tea Obsession</header>
      <HeaderBar onChange={(filters: Filters | undefined) => {
        setFilters(filters)
      }
      } />
      <TeaList filters={filters} />
    </>
  );
}
