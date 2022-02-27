import React from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  Typography,
} from '@mui/material';

import '../App.css';
import {
  REQUIRED_OFF_OVERRIDE_OPTIONS
} from '../App.js';

export default function SelectOffs(props) {
  return (
    <div className="SelectOffs">
      <Typography gutterBottom>
        Select which periods you want off. This will force Schedule Sensei to chop together schedules with these periods free (for the whole year). If your schedule has space for more offs, Schedule Sensei will add offs when they are available)
      </Typography>
      <div className='periodsForm'>
        <FormControl>
          <FormGroup row={true} className='periodsFormGroup'>
            {props.periods.map((checked, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox
                  checked={checked}
                  onChange={props.onChange}
                  name={'' + index}
                  color='primary'
                />}
                label={'Period ' + (index + 1)}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
      <Typography gutterBottom>
        By default, the Schedule Sensei only chops together schedules that have a lunch period in one of 4th, 5th, or 6th period. To override the Schedule Sensei, select one of the boxes below:
      </Typography>
      <div className='requiredOffOverideForm'>
        <FormControl>
          <FormGroup>
            {props.requiredOffOverride.map((checked, index) => (
              <FormControlLabel
                key={index}
                control={<Radio
                  checked={checked}
                  onChange={props.onChangeOverride}
                  name={'' + index}
                  color='primary'
                />}
                label={REQUIRED_OFF_OVERRIDE_OPTIONS[index][0]}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
}
