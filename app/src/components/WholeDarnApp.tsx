import React from 'react';
import TeaList from './TeaList'
import HeaderBar from './HeaderBar'
import { TeaoftheDay } from './TeaoftheDay';
import { Filters } from '../data/Tea.types';
import Fab from '@mui/material/Fab';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';

export function WholeDarnApp() {
  const [filters, setFilters] = React.useState<Filters>({});
  const [drawerOpen, setDrawerOpen] = React.useState(false);


  return (
    <>
      <div className="HeaderAndList" >
        <div className="AppScrollable">
          <div className="HeaderBackground">
            <header className="AppHeader">LULU'S TEA <br /> OBSESSION</header>
          </div>
          <div className="HeaderBar">
            <HeaderBar filters={filters} onChange={(filters: Filters) => {
              setFilters(filters)
            }
            } />
          </div>
          <TeaList filters={filters} />
        </div>
      </div>
      <TeaoftheDay drawerOpen={drawerOpen} onDrawerOpen={(open: boolean) => setDrawerOpen(open)} />
      <Fab onClick={() => setDrawerOpen(true)} sx={{ backgroundColor: '#78AF94', color: 'white', position: 'fixed', bottom: '20px', right: '20px' }}>
        <EmojiFoodBeverageRoundedIcon />
      </Fab>
    </>
  );
}
