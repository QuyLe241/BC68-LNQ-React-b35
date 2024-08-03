import React from 'react'
// import danhSachGheData from "../Data/danhSachGhe.json"


const HangGhe = ({item, soHangGhe}) => {
  const renderGhe = () => {
    return item.danhSachGhe.map((item, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if(item.daDat){
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      return <button key={index} disabled={disabled} style={{fontWeight: "700"}} className={`ghe ms-3 ${cssGheDaDat}`}>{item.soGhe}</button>
    })
  };

  const renderSohang = () => {
    return item.danhSachGhe.map((item, index) => {
      return <button style={{fontWeight: "700"}} className='rowNumber' key={index}>{item.soGhe}</button>
    })
  };

  const renderHangGhe = () => {
    if(soHangGhe === 0) {
      return <div>
        {item.hang} {renderSohang()}
      </div>
    } else {
      return <div>
      {item.hang} {renderGhe()}
    </div>
    }
  }


  return (
    <div className="">
      <div className='text-white ms-5 mt-1' style={{fontSize: "16px", fontWeight: "700"}}>
      {renderHangGhe()}
      </div>
    </div>
  )
}

export default HangGhe

{/* <div className="">
          <span>{hangGhe.hang}</span>
</div> */}