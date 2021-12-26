import { InputCommon } from '../../common/input';
import vc from '../../../public/img/turning/power_requirements/t_vc.png';
import ls from '../../../public/img/turning/feed_rate/t_ls.png';
import dm from '../../../public/img/turning/feed_rate/t_dm.png';
import wf from '../../../public/img/w_f.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const FeedRate = () => {
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
                    <InputCommon src={ls} placeholder="Legth of Cut/min" setValue={setF}/>
                    <InputCommon src={dm} placeholder="Diameter" setValue={setD1}/>
                </div>
                <Result src={wf} result={result} unit="mm/rev" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};