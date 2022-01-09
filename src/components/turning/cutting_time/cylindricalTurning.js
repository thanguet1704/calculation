import { InputCommon } from '../../common/input';
import d from '../../../public/img/turning/cutting_time/t_d.png';
import f from '../../../public/img/turning/cutting_time/external/tc/t_f.png';
import l from '../../../public/img/turning/cutting_time/external/tc/t_l.png';
import i from '../../../public/img/turning/cutting_time/t_i.png';
import vc from '../../../public/img/turning/cutting_time/t_vc.png';
import wtc from '../../../public/img/w_tc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const CylindricalTurning = () => {
    const [result, setResult] = useState(0);
    const [lValue, setL] = useState();
    const [iValue, setI] = useState();
    const [dValue, setD] = useState();
    const [fValue, setF] = useState();
    const [vcValue, setVC] = useState();
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    const handleOnReset = (event) => {
        event.target.value = '';
    }

    useEffect(() => {
        const cylindrical = (((lValue + 4) * iValue * Math.PI * dValue ) / (fValue * vcValue * 10 * 10 * 10)).toFixed(2);
        setResult(cylindrical);
    }, [lValue, iValue, dValue, fValue, vcValue]);

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>2.1. Cylindrical turning </b></h4>
                <div style={divInputStyle}>
                    <InputCommon src={l} placeholder="Length of Cut" setValue={setL}/>
                    <InputCommon src={i} placeholder="No.of holes" setValue={setI}/>
                    <InputCommon src={d} placeholder="Diameter" setValue={setD}/>
                    <InputCommon src={f} placeholder="Feed Rate" setValue={setF}/>
                    <InputCommon src={vc} placeholder="Cutting Speed" setValue={setVC}/>
                </div>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};