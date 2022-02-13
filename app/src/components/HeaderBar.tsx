
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import FilterModal from './FilterModal';
import { Filters } from '../data/Tea.types';


export default function HeaderBar(props: { filters: Filters, onChange: (filters: Filters) => void }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const searchTerm = event.target.value as string;
    props.onChange({
      ...props.filters,
      searchTerm: searchTerm
    })
  };

  const handleChange = (newFilters: Filters) => {
    props.onChange({
      ...newFilters
    })
  }

  return (
    <>
      <Paper
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%', marginTop: "10px" }}
      >
        <IconButton sx={{ p: '10px' }} onClick={handleOpen}>
          <FilterListIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search name or ingredient"
          value={props.filters.searchTerm}
          onChange={handleSearch}
        />
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}>
        <FilterModal filters={props.filters} onChange={handleChange} />
      </Modal>
    </>
  );
}
