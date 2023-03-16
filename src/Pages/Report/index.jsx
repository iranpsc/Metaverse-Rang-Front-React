import React from 'react';

import Modal from '../../Components/Modal';
import useTabs from '../../Services/Hooks/useTabs';
import Problem from './Tabs/Problem';
// import Preview from './Tabs/Problem/Preview';

export default function Report() {
  const tabs = [
    {title: 'گذارش خطا', content: <Problem />},
    // {title: 'گذارش خطا', content: <Preview />}
  ]

  const TabPanel = useTabs(tabs);

  return (
    <Modal type='modal-section-xl' title='سوالات خود را در انجمن حم مطرح نمایید این بخش تنها در صورت وجود هرگونه خطا با تذکر شما حل خواهد شد'>
      { TabPanel }
    </Modal>
  )
}
