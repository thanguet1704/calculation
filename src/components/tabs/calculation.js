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
// import { TabMenu } from '../turning/tabMenu.js';
import { CylindricalTurning } from '../turning/cutting_time/cylindricalTurning.js';
import { CuttingTimeT1 } from '../turning/cutting_time/cuttingTimeT1.js';
import { FullyCylinder } from '../turning/cutting_time/facing/fullyCylinder';
import { HollowCylinder } from '../turning/cutting_time/facing/hollowCylinder';
import { PowerRequirement } from '../turning/power_requirements';
import { CuttingSpeedSteel } from '../turning/cutting_speed/steels';
import pdf from '../../public/img/pdf.png';
import file from '../../public/assets/pdf/turning/calc_pdf_m.pdf';
import millingFilePdf from '../../public/assets/pdf/milling/calc_pdf_m.pdf'
import drillingFilePdf from '../../public/assets/pdf/drilling/calc_pdf_d.pdf'
import { turningFigures } from '../tabs/figures/turning_figures';
import { millingFigures } from '../tabs/figures/milling_figures';
import { MillingCuttingTime } from './milling/cutting_time';
import { MillingPowerRequirement } from './milling/power_requirement';
import { MillingCuttingSpeed } from './milling/cutting_speed';
import { drillingFigures } from '../tabs/figures/drilling_figures';
import { DrillingCuttingTime } from './drilling/cutting_time';
import { DrillingPowerRequirement } from './drilling/power_requirement';
import { DrillingCuttingSpeed } from './drilling/cutting_speed/index';
import { CuttingSpeedCastSteel } from '../turning/cutting_speed/cast_steels';

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
  height: 'auto',
};

const pdfStyle = {
  fontSize: '90%',
};

const iconStyle = {
  width: '10%'
};

const floatButtonStyle = {
  width: '3em',
  height: '3em',
  borderRadius: 50,
  position: 'fixed',
  bottom: '1em',
  right: '1em',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'rgb(0, 76, 49)',
  color: '#fff',
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
    <div style={floatButtonStyle}>
      <a href="#home" style={floatButtonStyle}>
        <p>^</p>
      </a>
    </div>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab icon={<img src={appTurning} alt="" style={iconTabStyle}/>} label="Turning" {...a11yProps(0)} />
        <Tab icon={<img src={appMilling} alt="" style={iconTabStyle}/>} label="Milling" {...a11yProps(1)} />
        <Tab icon={<img src={appDrilling} alt="" style={iconTabStyle}/>} label="Drilling" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Box sx={{ width: '100%' }}>
        <Figure figures={turningFigures}/>
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <p style={pdfStyle}>
                <a href={file} target="_blank" title="PDF:Calculation Formula(Milling)" rel="noopener noreferrer">
                    > Calculation Formula 
                    <img src={pdf} style={iconStyle} alt="" />
                </a>
            </p>
        </div>
        <div id="vc">
          <h2><b>1. Tốc độ cắt vc [m/min]<hr/></b></h2>
          <CuttingSpeedSteel />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <CuttingSpeedCastSteel />
        </div>
        <div id="tc">
          <h2><b>2. Cutting Time T <sub>c</sub> [sec]<hr/></b></h2>
          {/* <TabMenu /> */}
          <CylindricalTurning />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <h4>
            <b>2.2. Facing </b>
            <FullyCylinder />
            <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
            <HollowCylinder />
            <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          </h4>
          <CuttingTimeT1 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
        </div>
        <div id="pc">
          <h2><b>3. Power Requirements P <sub>c</sub> [kW]<hr/></b></h2>
          <PowerRequirement />
        </div>
      </Box>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <Box sx={{ width: '100%' }}>
        <Figure figures={millingFigures} />
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <p style={pdfStyle}>
                <a href={millingFilePdf} target="_blank" title="PDF:Calculation Formula(Milling)" rel="noopener noreferrer">
                    > Calculation Formula 
                    <img src={pdf} style={iconStyle} alt="" />
                </a>
            </p>
        </div>
        <div id="tc">
          <h2><b>1. Cutting Time T <sub>c</sub> [sec]<hr/></b></h2>
          <MillingCuttingTime />
        </div>
        <div id="pc">
          <h2><b>2. Power Requirements P <sub>c</sub> [kW]<hr/></b></h2>
          <MillingPowerRequirement />
        </div>
        <div id="vc">
          <h2><b>3. Cutting Speed vc [m/min]<hr/></b></h2>
          <MillingCuttingSpeed />
        </div>
      </Box>
    </TabPanel>
    <TabPanel value={value} index={2}>
    <Box sx={{ width: '100%' }}>
        <Figure figures={drillingFigures} />
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <p style={pdfStyle}>
                <a href={drillingFilePdf} target="_blank" title="PDF:Calculation Formula(Milling)" rel="noopener noreferrer">
                    > Calculation Formula 
                    <img src={pdf} style={iconStyle} alt="" />
                </a>
            </p>
        </div>
        <div id="tc">
          <h2><b>1. Cutting Time T <sub>c</sub> [sec]<hr/></b></h2>
          <DrillingCuttingTime />
        </div>
        <div id="pc">
          <h2><b>2. Power Requirements P <sub>c</sub> [kW]<hr/></b></h2>
          <DrillingPowerRequirement />
        </div>
        <div id="vc">
          <h2><b>3. Cutting Speed vc [m/min]<hr/></b></h2>
          <DrillingCuttingSpeed />
        </div>
      </Box>
    </TabPanel>
    <h2 class="section-title hidden-phone">Cutting Calculation App 「SumiTool Calculator」</h2>
  </Box>
)};