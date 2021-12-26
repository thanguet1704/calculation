import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
  border: 'solid 1px #4934eb',
};

export const Selector = ({src, defaultLabel, items}) => {
  const [value, setValue] = React.useState();
  const [label, setLabel] = React.useState(defaultLabel);

  const handleChange = (event) => {
    setValue(event.target.value);
    setLabel(event.target.label);
  };

  return (
    <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start'}}>
        <img src={src} alt="" style={imgStyle} />
        <Select
          value={value}
          label={defaultLabel}
          onChange={handleChange}
          style={inputStyle}
        >
          {items.map(item => {
              return (
                <MenuItem value={item.value}>{item.label.trim()}</MenuItem>
              );
          })}
        </Select>
    </p>
  );
}
