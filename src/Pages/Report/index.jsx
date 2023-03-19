import React from 'react';

import Modal from '../../Components/Modal';
import useTabs from '../../Services/Hooks/useTabs';
import Problem from './Tabs/Problem';
// import Preview from './Tabs/Problem/Preview';

export default function Report() {
  const tabs = [
    {title: 'گزارش خطا', content: <Problem />},
    // {title: 'گزارش خطا', content: <Preview />}
  ]

  const TabPanel = useTabs(tabs);

  return (
    <Modal type='modal-section-xl' title='گزارشات '>
      { TabPanel }
    </Modal>
  )
}
