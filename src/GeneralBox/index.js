import React from 'react'
import BottomBox from '../OtherComponents/BottomBox'
import Header from '../OtherComponents/Header'
import LeftBox from '../OtherComponents/LeftBox'
import NewsBox from '../OtherComponents/NewsBox'
import RightBox from '../OtherComponents/RightBox'
import './GeneralBox.css'

function GeneralBox() {
  return (
    <div className="generalBox">
      <Header />
      <LeftBox />
      <RightBox />
      <NewsBox />
      <BottomBox />
    </div>
  )
}

export default GeneralBox