import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";


const imgStyle = {
  width: 'auto',
  height: 40
};

const inputStyle = {
  height: 50,
  borderRadius: 5,
  textAlign: 'right',
  // border: 'solid 1px #4934eb',
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    boxSizing: 'border-box',
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    borderColor: "#80bdff",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}));

export const Selector = ({ text, src, items, setSelected, setValue, disable}) => {
  const [valueSelect, setValueSelect] = React.useState();

  const handleChange = (event) => {
    setValueSelect(event.target.value);
    setSelected(true);
    setValue(event.target.value);
  };

  return (
    <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', paddingLeft: 20, paddingRight: 20}}>
        { text ? <b style={{ height: 40 }}>{text}</b> : <img src={src} alt="" style={imgStyle} />}
        <FormControl  fullWidth>
          <Select
            value={valueSelect}
            onChange={handleChange}
            style={inputStyle}
            disabled={!disable}
            input={<BootstrapInput />}
          >
            {items?.map(item => {
                return (
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                );
            })}
          </Select>
        </FormControl>
    </p>
  );
}
