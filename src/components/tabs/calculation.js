import appTurning from '../../public/img/app_turning.png';
import appMilling from '../../public/img/app_milling.png';
import appDrilling from '../../public/img/app_drilling.png';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Figure } from './figures/index.js';
import { TabMenu } from '../turning/tabMenu.js';
import { CuttingTimeTC } from '../turning/cutting_time/external/cuttingTimeTc.js';
import { CuttingTimeT1 } from '../turning/cutting_time/external/cuttingTimeT1.js';
import { FacingTC } from '../turning/cutting_time/facing/facingtc';
import { FacingT1 } from '../turning/cutting_time/facing/facingt1';
import { GroovingTC } from '../turning/cutting_time/grooving/groovingtc';
import { GroovingT1 } from '../turning/cutting_time/grooving/groovingt1';
import { CutOffTC } from '../turning/cutting_time/cutoff/cutOffTc';
import { CutOffT1 } from '../turning/cutting_time/cutoff/cutOffT1';
import { CutOffT2 } from '../turning/cutting_time/cutoff/cutOffT2';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const iconTabStyle = {
  width: 40,
  height: 'auto'
};

export const Calculation = (props) => {
  const { setTitle } = props;
  const [value, setValue] = React.useState(0);
  const handleChange = (event, value) => {

    switch (value) {
      case 1: {
        setValue(1);
        setTitle('Milling');
        break;
      }

      case 2: {
        setValue(2);
        setTitle('Drilling');
        break;
      }
    
      default: {
        setValue(0);
        setTitle('Turning');
        break;
      }
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab icon={<img src={appTurning} alt="" style={iconTabStyle}/>} label="Turning" {...a11yProps(0)} />
        <Tab icon={<img src={appMilling} alt="" style={iconTabStyle}/>} label="Milling" {...a11yProps(1)} />
        <Tab icon={<img src={appDrilling} alt="" style={iconTabStyle}/>} label="Drilling" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Box sx={{ width: '100%' }}>
        <Figure />
        <div id="tc">
          <p><b>1. Cutting Time T <sub>c</sub> [sec]<hr/></b></p>
          <TabMenu />
          <CuttingTimeTC />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <CuttingTimeT1 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <FacingTC />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <FacingT1 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <GroovingTC />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <GroovingT1 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <CutOffTC />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <CutOffT1 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <CutOffT2 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
        </div>
        <div id="pc">
          <p><b>2. Power Requirements P <sub>c</sub> [kW]<hr/></b></p>
        </div>
        <div id="vc">
          <p><b>3. Cutting Speed vc [m/min]<hr/></b></p>
        </div>
        <div id="n">
          <p><b>4. Spindle Speed n [min <sup>-1</sup><hr/></b></p>
        </div>
        <div id="f">
          <p><b>5. Feed Rate f [mm/rev]<hr/></b></p>
        </div>
        <div id="p">
          <p><b>6. Cutting Force P [kN]<hr/></b></p>
        </div>
      </Box>
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item Two
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
  </Box>
)};