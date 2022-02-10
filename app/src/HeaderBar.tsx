
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import FilterModal from './FilterModal';
import { Filters } from './Tea.types';


export default function HeaderBar(props: { onChange: (filters: Filters) => {} }) {
  const [open, setOpen] = React.useState(false);
  const [filters, setFilters] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState(undefined);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = (newFilters: Filters) => {
    setOpen(false);
    setFilters({ ...newFilters, searchTerm: searchTerm });
    handleSearchExecute();
  }
  const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchTerm(event.target.value as string);
  };
  const handleSearchExecute = () => {
    props.onChange({
      ...filters,
      searchTerm: searchTerm
    })
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
        <IconButton type="submit" sx={{ p: '10px' }} onClick={handleSearchExecute}>
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
