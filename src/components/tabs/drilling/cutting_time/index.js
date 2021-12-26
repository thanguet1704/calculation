import { InputCommon } from '../../../common/input';
import vc from '../../../../public/img/milling/cutting_time/m_vc.png';
import f from '../../../../public/img/drilling/cutting_time/d_f.png';
import h from '../../../../public/img/drilling/cutting_time/d_h_mm.png';
import dc from '../../../../public/img/milling/cutting_time/m_dc.png';
import i from '../../../../public/img/drilling/cutting_time/d_i.png';
import wtc from '../../../../public/img/w_tc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const DrillingCuttingTime = () => {
    const [result, setResult] = useState(0);
    const [nValue, setN] = useState(0);
    const [fValue, setF] = useState(0);
    const [lValue, setL] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <div style={divInputStyle}>
                    <InputCommon src={vc} placeholder="Cutting Speed" setValue={setN}/>
                    <InputCommon src={f} placeholder="Feed Rate per Revolution" setValue={setF}/>
                    <InputCommon src={h} placeholder="Depth of Hole" setValue={setL}/>
                    <InputCommon src={i} placeholder="No.of holes" setValue={setL}/>
                    <InputCommon src={dc} placeholder="Diameter" setValue={setL}/>
                </div>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};