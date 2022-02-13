import React from 'react';
import TeaList from './TeaList'
import HeaderBar from './HeaderBar'
import { TeaoftheDay } from './TeaoftheDay';
import { Filters } from '../data/Tea.types'
import { flexbox } from '@mui/system';


export function WholeDarnApp() {
  const [filters, setFilters] = React.useState<Filters>({});

  return (
    <>
      <div className="HeaderBackground">
        <header className="AppHeader">LULU'S TEA <br /> OBSESSION</header>
      </div>
      <div className="Background">
        <div className="HeaderBar">
          <HeaderBar filters={filters} onChange={(filters: Filters) => {
            setFilters(filters)
          }
          } />
        </div>
        <TeaoftheDay />
        <TeaList filters={filters} />
      </div>
    </>
  );
}
