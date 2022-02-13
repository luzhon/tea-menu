
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TeaType, Brand, Filters } from '../data/Tea.types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '300px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px'
};

export default function FilterModal(props: { filters: Filters, onChange: (filters: Filters) => void }) {

  const handleTypeChange = (event: SelectChangeEvent) => {
    const newType = event.target.value as TeaType;
    props.onChange({ ...props.filters, type: newType })
  };

  const handleBrandChange = (event: SelectChangeEvent) => {
    const newBrand = event.target.value as Brand;
    props.onChange({ ...props.filters, brand: newBrand })
  };

  const handleCaffeineChange = (event: SelectChangeEvent) => {
    const newCaffeine = event.target.value as unknown as number;
    props.onChange({ ...props.filters, caffeine: newCaffeine })
  };

  const handleSealedChange = (event: SelectChangeEvent) => {
    const newSealed = event.target.value === "true";
    props.onChange({ ...props.filters, sealed: newSealed })

  };

  return (
    <>
      <Box sx={style}>
        <FormControl fullWidth>
          <InputLabel id="teatype">Tea Type</InputLabel>
          <Select
            labelId="teatype-label"
            id="teatype"
            value={props.filters.type}
            label="Tea Type"
            onChange={handleTypeChange}
          >
            <MenuItem value={undefined}>{"All"}</MenuItem>
            {Object.keys(TeaType).map((type: string) => (
              <MenuItem value={type}>{type}</MenuItem>)
            )}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginTop: "15px" }}>
          <InputLabel id="brand">Brand</InputLabel>
          <Select
            labelId="brand-label"
            id="brand"
            value={props.filters.brand}
            label="Brand"
            onChange={handleBrandChange}
          >
            <MenuItem value={undefined}>{"All"}</MenuItem>
            {Object.values(Brand).map((brand: string) => (
              <MenuItem value={brand}>{brand}</MenuItem>)
            )}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginTop: "15px" }}>
          <InputLabel id="caffeine">Caffeine</InputLabel>
          <Select
            labelId="caffeine-label"
            id="caffeine"
            value={props.filters.caffeine?.toString()}
            label="caffeine"
            onChange={handleCaffeineChange}
          >
            <MenuItem value={undefined}>{"All"}</MenuItem>
            <MenuItem value={0}>{"Caffeine-free"}</MenuItem>
            <MenuItem value={1}>{"Low"}</MenuItem>
            <MenuItem value={2}>{"Medium"}</MenuItem>)
            <MenuItem value={3}>{"High"}</MenuItem>)
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginTop: "15px" }}>
          <InputLabel id="sealed">Sealed</InputLabel>
          <Select
            labelId="sealed-label"
            id="sealed"
            value={props.filters.sealed?.toString()}
            label="Sealed"
            onChange={handleSealedChange}
          >
            <MenuItem value={undefined}>{"All"}</MenuItem>
            <MenuItem value={"true"}>{"Sealed"}</MenuItem>
            <MenuItem value={"false"}>{"Opened"}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
