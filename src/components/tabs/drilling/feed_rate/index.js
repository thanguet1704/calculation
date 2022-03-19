import { InputCommon } from '../../../common/input';
import vc from '../../../../public/img/turning/power_requirements/t_vc.png';
import f from '../../../../public/img/drilling/feed_rate/w_f.png';
import vf from '../../../../public/img/milling/feed_rate/m_vf.png';
import dc from '../../../../public/img/milling/feed_rate/m_dc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const DrillingFeedRate = () => {
    const [result, setResult] = useState(0);
    const [nValue, setN] = useState(0);
    const [fValue, setF] = useState(0);
    const [d1Value, setD1] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={divInputStyle}>
                    <InputCommon src={vc} placeholder="Cutting Speed" setValue={setN}/>
                    <InputCommon src={vf} placeholder="Legth of Cut/min" setValue={setF}/>
                    <InputCommon src={dc} placeholder="Diameter" setValue={setD1}/>
                </div>
                <Result result={result} unit="mm/rev" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};