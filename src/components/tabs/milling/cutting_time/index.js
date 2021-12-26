import { InputCommon } from '../../../common/input';
import vc from '../../../../public/img/milling/cutting_time/m_vc.png';
import fz from '../../../../public/img/milling/cutting_time/m_fz.png';
import l from '../../../../public/img/milling/cutting_time/m_l.png';
import dc from '../../../../public/img/milling/cutting_time/m_dc.png';
import z from '../../../../public/img/milling/cutting_time/m_z.png';
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

export const MillingCuttingTime = () => {
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
                    <InputCommon src={fz} placeholder="Feed Rate per Tooth" setValue={setF}/>
                    <InputCommon src={l} placeholder="Length of Cut" setValue={setL}/>
                    <InputCommon src={dc} placeholder="Diameter" setValue={setL}/>
                    <InputCommon src={z} placeholder="No. of Flutes" setValue={setL}/>
                </div>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};