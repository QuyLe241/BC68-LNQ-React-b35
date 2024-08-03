import React from 'react'
import danhSachGheData from "../Data/danhSachGhe.json"


const HangGhe = ({hangGhe}) => {
  const renderGhe = () => {
    // const dataGhe = danhSachGheData.danhSachGhe;
    return( <div> {danhSachGheData.map((item, index) => {
      let cssGheDaDat = ''
        if (item.daDat) {
          cssGheDaDat = 'gheDuocChon'
        }
        return <button key={index} className='ghe ms-3'>{}</button>
    })};
    </div>
    )};
  return (
    <div className="">
    <div className='text-white ms-5 mt-4' style={{fontSize: "16px", fontWeight: "700"}}>
      {/* {hangGhe.hang} */}
      <div className="">
      <span>{hangGhe.hang}</span>
      </div>
      {/* <div className="">{renderGhe()}</div> */}
    </div>
    <div className="">{renderGhe()}</div>
    </div>
  )
}

export default HangGhe