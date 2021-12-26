import { InputCommon } from '../../../common/input';
import n from '../../../../public/img/turning/cutting_time/external/tc/t_n.png';
import f from '../../../../public/img/turning/cutting_time/external/tc/t_f.png';
import l from '../../../../public/img/turning/cutting_time/external/tc/t_l.png';
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

export const CuttingTimeTC = () => {
    const [result, setResult] = useState(0);
    const [nValue, setN] = useState(0);
    const [fValue, setF] = useState(0);
    const [lValue, setL] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    const handleOnReset = (event) => {
        event.target.value = '';
    }

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>[External]<br/>&emsp;Cutting Time T<sub>c</sub> (Reference : n) [sec]</b></h4>
                <div style={divInputStyle}>
                    <InputCommon src={n} placeholder="Spindle Speed" setValue={setN}/>
                    <InputCommon src={f} placeholder="Feed Rate" setValue={setF}/>
                    <InputCommon src={l} placeholder="Length of Cut" setValue={setL}/>
                </div>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};