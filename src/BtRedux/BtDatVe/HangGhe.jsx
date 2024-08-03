import React from 'react'
// import danhSachGheData from "../Data/danhSachGhe.json"


const HangGhe = ({item}) => {
  const renderGhe = () => {
    return item.danhSachGhe.map((item, index) => {
      let cssGheDaDat = "";
      if(item.daDat){
        cssGheDaDat = "gheDuocChon";
      }
      return <button key={index} style={{fontWeight: "700"}} className={`ghe ms-3 ${cssGheDaDat}`}>{item.soGhe}</button>
    })
  };
  return (
    <div className="">
      <div className='text-white ms-5 mt-4' style={{fontSize: "16px", fontWeight: "700"}}>
      {item.hang} {renderGhe()}
      </div>
    </div>
  )
}

export default HangGhe

{/* <div className="">
          <span>{hangGhe.hang}</span>
</div> */}