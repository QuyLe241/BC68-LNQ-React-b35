import React from 'react'


const HangGhe = ({hangGhe, data}) => {
  const renderGhe = () => {
    return <div> {data.map((item, index) => {
      let cssGheData = '';
        if (item.daDat) {
          cssGheData = 'gheDuocChon';
        }
        return <button key={index} className='ghe'>{item.soGhe}</button>
    })};
    </div>
  };
  return (
    <div className='text-white ms-5 mt-4' style={{fontSize: "16px", fontWeight: "700"}}>
      {hangGhe.hang}
      {/* {renderGhe()} */}
    </div>
  )
}

export default HangGhe