import selectCuttingTime from '../../public/img/select_tc.png';
import { Button, Row, Col } from 'antd';

const imgSelectStyle = {
  width: 80,
  height: 60,
};

const buttonSelectStyle = {
  borderRadius: '5',
  borderColor: '#000',
};

export const SelectButton = (props) => {
    return (
      <a href={props.item}>
        <Button type="primary" style={{ width: '100'}}>
          <img src={selectCuttingTime} style={imgSelectStyle} />
        </Button>
        <span>{props.title}</span>
      </a>
    );
}