import React from 'react'
import Modal from '../../Components/Modal';
import useTabs from '../../Services/Hooks/useTabs';
import Note from './Tabs/Note';
import Ticket from './Tabs/Ticket';


export default function Sanad() {
  const tabs = [
    {title: ' سند ها ', content: <Ticket />},
    {title: 'یادداشت ها', content: <Note />}
  ]

  const TabPanel = useTabs(tabs);

  return (
    <Modal type='modal-section-xl' title='اسناد'>
      { TabPanel }
    </Modal>
  )
}
