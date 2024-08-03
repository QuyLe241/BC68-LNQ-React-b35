import React from 'react'


const HangGhe = ({hangGhe}) => {
  const renderGhe = () => {
    return hangGhe.danhSachGheData.map((item, index) => {
      let cssGheData = '';
        if (item.daDat) {
          cssGheData = 'gheDuocChon';
        }
        return <button key={index} className='ghe'>{item.soGhe}</button>
    });
  };
  return (
    <div className='text-white ms-5 mt-4' style={{fontSize: "16px", fontWeight: "700"}}>
      {hangGhe.hang}
      {/* {renderGhe()} */}
    </div>
  )
}

export default HangGhe