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
import { CuttingSpeedCastSteel } from '../turning/cutting_speed/cast_steels';
import { PowerCut } from '../turning/power_cut';
import { Edge } from './milling/cutting_time/edge';
import { SelectWidth } from './milling/power_requirement/select_width';
import { CutSpeed } from './milling/power_requirement/cut_speed';
import { PhayTho } from './milling/proccessing_time/phay_tho';
import { PhayTinh } from './milling/proccessing_time/phay_tinh';
import { PhayChuVi } from './milling/proccessing_time/phay_chu_vi';
import { PhayTinh2 } from './milling/proccessing_time/phay_tinh_2';
import { PhayRanh } from './milling/proccessing_time/phay_ranh';
import { Drilling11 } from './drilling/drilling11';
import { Drilling12 } from './drilling/drilling12';
import { Drilling13 } from './drilling/drilling13';
import { Drilling14 } from './drilling/drilling14';
import { Drilling21 } from './drilling/drilling21';
import { Drilling22 } from './drilling/drilling22';
import { Drilling23 } from './drilling/drilling23';
import { Drilling311 } from './drilling/drilling311';
import { Drilling312 } from './drilling/drilling312';
import { Drilling321 } from './drilling/drilling321';
import { Drilling322 } from './drilling/drilling322';
import { Drilling331 } from './drilling/drilling331';
import { Drilling332 } from './drilling/drilling332';
import { Drilling4 } from './drilling/drilling4';
import { Turning13 } from '../turning/turning_13';
import { Turning14 } from '../turning/turning_14';
import { Turning15 } from '../turning/turning_15';
import { Turning16 } from '../turning/turning_16';
import { Turning17 } from '../turning/turning_17';

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
  color: 'rgb(103, 134, 255)'
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
  backgroundColor: '#EDAEF9',
  color: '#000',
  fontWeight: 'bold',
};

export const Calculation = (props) => {
  const { setTitle } = props;
  const [value, setValue] = React.useState(0);
  const handleChange = (event, value) => {

    switch (value) {
      case 1: {
        setValue(1);
        setTitle('Phay');
        break;
      }

      case 2: {
        setValue(2);
        setTitle('Khoan');
        break;
      }
    
      default: {
        setValue(0);
        setTitle('Tiện');
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
        <Tab icon={<img src={appTurning} alt="" style={iconTabStyle}/>} label="Tiện" {...a11yProps(0)} />
        <Tab icon={<img src={appMilling} alt="" style={iconTabStyle}/>} label="Phay" {...a11yProps(1)} />
        <Tab icon={<img src={appDrilling} alt="" style={iconTabStyle}/>} label="Khoan" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Box sx={{ width: '100%' }}>
        <Figure figures={turningFigures}/>
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <p style={pdfStyle}>
                <a href={file} target="_blank" title="PDF:Calculation Formula(Milling)" rel="noopener noreferrer">
                    > Công thức tính toán và bảng tra
                    <img src={pdf} style={iconStyle} alt="" />
                </a>
            </p>
        </div>
        <div id="vc">
          <h2><b>1. Tốc độ cắt vc [m/min]<hr/></b></h2>
          <CuttingSpeedSteel />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <CuttingSpeedCastSteel />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Turning13 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Turning14 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Turning15 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Turning16 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Turning17 />
        </div>
        <div id="tc">
          <h2><b>2. Thời gian gia công T<sub>c</sub> [sec]<hr/></b></h2>
          {/* <TabMenu /> */}
          <CylindricalTurning />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <h4>
            <b>2.2. Tiện mặt đầu </b>
            <FullyCylinder />
            <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
            <HollowCylinder />
            <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          </h4>
          <CuttingTimeT1 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
        </div>
        <div id="fc">
          <h2><b>3. Lực cắt chính: F<sub>c</sub> [kW]<hr/></b></h2>
          <PowerCut />
        </div>
        <div id="pc">
          <h2><b>4. Công suất yêu cầu: P<sub>c</sub> [kW]<hr/></b></h2>
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
                    > Công thức tính toán và bảng tra
                    <img src={pdf} style={iconStyle} alt="" />
                </a>
            </p>
        </div>
        <div id="tc">
          <h2><b>1. Chọn dao</b></h2>
          <MillingCuttingTime />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Edge />
        </div>
        <div id="pc">
          <h2><b>2. Tra tốc độ cắt, lượng chạy dao răng và thông số hình học dao.</b></h2>
          <SelectWidth />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <MillingPowerRequirement />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <CutSpeed />
        </div>
        <div id="vc">
          <h2><b>3. Công suất yêu cầu.<hr/></b></h2>
          <MillingCuttingSpeed />
        </div>
        <div id="pt">
          <h2><b>4. Thời gian gia công.<hr/></b></h2>
          <PhayChuVi />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <PhayTho />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <PhayTinh />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <PhayTinh2 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <PhayRanh />
        </div>
      </Box>
    </TabPanel>
    <TabPanel value={value} index={2}>
    <Box sx={{ width: '100%' }}>
        <Figure figures={drillingFigures} />
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <p style={pdfStyle}>
                <a href={drillingFilePdf} target="_blank" title="PDF:Calculation Formula(Milling)" rel="noopener noreferrer">
                    > Công thức tính toán và bảng tra
                    <img src={pdf} style={iconStyle} alt="" />
                </a>
            </p>
        </div>
        <div id="tc">
          <h2><b>1. Tra tốc độ cắt, lượng chạy dao, số vòng quay, đường kính mũi khoan.<hr/></b></h2>
          <Drilling11 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Drilling12 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Drilling13 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Drilling14 />
        </div>
        <div id="pc">
          <h2><b>2. Mô men<hr/></b></h2>
          <Drilling21 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Drilling22 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Drilling23 />
        </div>
        <div id="vc">
          <h2><b>3. Thời gian gia công<hr/></b></h2>
          <h3>3.1. Khoan thường</h3>
          <Drilling311 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Drilling312 />
          <h3>3.2. Khoét</h3>
          <Drilling321 />
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Drilling322 />
          <h3>3.3. Taro</h3>
          <Drilling331 /> 
          <hr style={{ borderTop: 'dashed #DDD 1px' }}/>
          <Drilling332 />
        </div>
        <div id="p">
          <h2><b>4. Công suất yêu cầu<hr/></b></h2>
          <Drilling4 />
        </div>
      </Box>
    </TabPanel>
    <h2 class="section-title hidden-phone">Cutting Calculation App 「SumiTool Calculator」</h2>
  </Box>
)};