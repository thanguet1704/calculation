import { Tabs } from 'antd';
import { Image } from 'antd';

const { TabPane } = Tabs;

export function TabItem(props) {
    return (
    <TabPane
      tab={
        <span>
          djkfj
            <Image
            width={20}
            height={20}
            src={props.src}
            preview={false}
            />
        </span>
      }
      key={props.key}
    >
    </TabPane>
    );
}