import { Tabs } from 'antd';
import { Image } from 'antd';
import appTurning from '../../public/img/app_turning.png';
import appMilling from '../../public/img/app_milling.png';
import appDrilling from '../../public/img/app_drilling.png';
import { TabItem } from './tabItem';
import { SelectButton } from './button';

const { TabPane } = Tabs;

const tabStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Calculation = (props) => {
  const { setTitle } = props;
  const handleChange = (value) => {

    console.log(value);
    switch (value) {
      case "2":
        setTitle('Milling');
        break;

      case "3":
        setTitle('Drilling');
        break;
    
      default:
        setTitle('Turning');
    }
  };

  return (
  <Tabs defaultActiveKey="1" onChange={handleChange}>
    <TabPane 
      tab={
        <span style={tabStyle}>
          Turning
            <Image
            width={20}
            height={20}
            src={appTurning}
            preview={false}
            />
        </span>
      }
      key="1"
    >
      {/* <SelectButton title="Cutting time"/> */}
    </TabPane>
    <TabPane 
      tab={
        <span style={tabStyle}>
          Milling
          <Image
            width={20}
            height={20}
            src={appMilling}
            preview={false}
            />
        </span>
      }
      key="2"
    >
      content 2
    </TabPane>
    <TabPane
      tab={
        <span style={tabStyle}>
          Drilling
          <Image
            width={20}
            height={20}
            src={appDrilling}
            preview={false}
            />
        </span>
      }
      key="3"
    >
      content 1
    </TabPane>
  </Tabs>
)};