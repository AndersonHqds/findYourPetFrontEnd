import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


interface IProps {
    items?: Array<any>,    
    handleOnChange?: any,
    currValue?: any,
    label?: string
}

const CustomSelect: React.FC<IProps> = (props: IProps) => {
  return (
    <FormControl>
    <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={props.currValue}
      onChange={() => props.handleOnChange}
    >
        {props.items?.map((item,idx) => (
            <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
        ))}
    </Select>
  </FormControl>
  );
};

export default CustomSelect;
