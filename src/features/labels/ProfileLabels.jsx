import {
  RankInfoTable,
  UsedInfoTable,
} from '@/features/tables/ProfileInfoTables';
import { InfoCircleOutlined } from '@ant-design/icons';

import { Tooltip } from 'antd';

const LabelLevel = () => {
  return (
    <span>
      {'기술등급'}
      <Tooltip
        title={() => <RankInfoTable />}
        overlayInnerStyle={{
          width: 500,
          padding: 0,
        }}
        color={'#fff'}
      >
        <InfoCircleOutlined
          style={{
            fontSize: 15,
            marginLeft: '.5rem',
            color: 'var(--success-color)',
          }}
        />
      </Tooltip>
    </span>
  );
};

const LabelUsed = () => {
  return (
    <span>
      {'수행업무/주요사용기술'}
      <Tooltip
        title={() => <UsedInfoTable />}
        overlayInnerStyle={{
          width: 700,

          padding: 0,
        }}
        align={{ offset: ['-350', '-20'] }}
        color={'#fff'}
        arrow={{ pointAtCenter: false }}
      >
        <InfoCircleOutlined
          style={{
            fontSize: 15,
            marginLeft: '.5rem',
            color: 'var(--success-color)',
          }}
        />
      </Tooltip>
    </span>
  );
};

export { LabelLevel, LabelUsed };
