
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import FilterModal from './FilterModal';
import { Filters } from '../data/Tea.types';


export default function HeaderBar(props: { onChange: (filters: Filters | undefined) => void }) {
  const [open, setOpen] = React.useState(false);
  const [filters, setFilters] = React.useState<Filters | undefined>(undefined);
  const [searchTerm, setSearchTerm] = React.useState<string | undefined>(undefined);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = (newFilters: Filters) => {
    setOpen(false);
    const updatedFilters = { ...newFilters, searchTerm: searchTerm }
    setFilters(updatedFilters);
    handleSearchExecute(updatedFilters);
  }
  const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchTerm(event.target.value as string);
  };
  const handleSearchExecute = (newFilters?: Filters) => {
    const newestFilters = newFilters ? newFilters : {
      ...filters,
      searchTerm: searchTerm
    }
    props.onChange(newestFilters)
  };

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
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconButton type="submit" sx={{ p: '10px' }} onClick={() => { handleSearchExecute(); }}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}>
        <FilterModal onSave={handleSave} />
      </Modal>
    </>
  );
}
