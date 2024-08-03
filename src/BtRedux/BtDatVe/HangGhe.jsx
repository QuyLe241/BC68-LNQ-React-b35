import React from 'react'
import danhSachGheData from "../Data/danhSachGhe.json"


const HangGhe = ({hangGhe, data}) => {
  const renderGhe = () => {
    return( <div> {danhSachGheData.map((item, index) => {
      let cssGheDaDat = ''
        if (item.daDat) {
          cssGheDaDat = 'gheDuocChon'
        }
        return <button key={index} className='ghe'>{}</button>
    })};
    </div>
    )};
  return (
    <div className='text-white ms-5 mt-4' style={{fontSize: "16px", fontWeight: "700"}}>
      {hangGhe.hang}
      {renderGhe()}
    </div>
  )
}

export default HangGhe