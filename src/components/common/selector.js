import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";


const imgStyle = {
  width: 'auto',
  height: 40
};

const inputStyle = {
  minWidth: 304,
  maxWidth: 304,
  height: 45,
  borderRadius: 5,
  textAlign: 'right',
  // border: 'solid 1px #4934eb',
};

export const Selector = ({ text, src, defaultLabel, items, setSelected, setValue, disable}) => {
  const [valueSelect, setValueSelect] = React.useState();

  const handleChange = (event) => {
    setValueSelect(event.target.value);
    setSelected(true);
    setValue(event.target.value);
  };

  return (
    <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', paddingLeft: 20, paddingRight: 20}}>
        { text ? <b style={{ height: 40 }}>{text}</b> : <img src={src} alt="" style={imgStyle} />}
        <FormControl required>
          <InputLabel>{defaultLabel}</InputLabel>
          <Select
            value={valueSelect}
            label={defaultLabel}
            onChange={handleChange}
            style={inputStyle}
            disabled={!disable}
          >
            {items?.map(item => {
                return (
                  <MenuItem value={item.value}>{item.label.trim()}</MenuItem>
                );
            })}
          </Select>
        </FormControl>
    </p>
  );
}
