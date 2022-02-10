
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TeaType, Brand, Filters } from './Tea.types';
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

export default function FilterModal(props: {onSave: (filters: Filters) => {}}) {
  const [type, setType] = React.useState<TeaType>(undefined);
  const [brand, setBrand] = React.useState<Brand>(undefined);
  const [caffeine, setCaffeine] = React.useState<number>(undefined);
  const [sealed, setSealed] = React.useState<boolean>(undefined);

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleBrandChange = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string);
  };

  const handleCaffeineChange = (event: SelectChangeEvent) => {
    setCaffeine(event.target.value as string);
  };

  const handleSealedChange = (event: SelectChangeEvent) => {
    setSealed(event.target.value as string);
  };

  const handleSave = () => {
    props.onSave({
      type,
      brand,
      caffeine,
      sealed
    })
  }

  return (
    <>
      <Box sx={style}>
        <FormControl fullWidth>
          <InputLabel id="teatype">Tea Type</InputLabel>
          <Select
            labelId="teatype-label"
            id="teatype"
            value={type}
            label="Tea Type"
            onChange={handleTypeChange}
          >
            <MenuItem value={undefined}>{"All"}</MenuItem>
            {Object.keys(TeaType).map((type: TeaType) => (
              <MenuItem value={type}>{type}</MenuItem>)
            )}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{marginTop: "15px"}}>
          <InputLabel id="brand">Brand</InputLabel>
          <Select
            labelId="brand-label"
            id="brand"
            value={brand}
            label="Brand"
            onChange={handleBrandChange}
          >
            <MenuItem value={undefined}>{"All"}</MenuItem>
            {Object.keys(Brand).map((brand: Brand) => (
              <MenuItem value={brand}>{Brand[brand]}</MenuItem>)
            )}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{marginTop: "15px"}}>
          <InputLabel id="caffeine">Caffeine</InputLabel>
          <Select
            labelId="caffeine-label"
            id="caffeine"
            value={caffeine}
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
         <FormControl fullWidth sx={{marginTop: "15px"}}>
          <InputLabel id="sealed">Sealed</InputLabel>
          <Select
            labelId="sealed-label"
            id="sealed"
            value={sealed}
            label="Sealed"
            onChange={handleSealedChange}
          >
            <MenuItem value={undefined}>{"All"}</MenuItem>
            <MenuItem value={true}>{"Sealed"}</MenuItem>
            <MenuItem value={false}>{"Opened"}</MenuItem>
          </Select>
        </FormControl>
        <IconButton onClick={handleSave} sx={{ position: "absolute", right: "22px", bottom: "10px"}}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
}
