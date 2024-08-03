import React from 'react'

const ThongTinDatGhe = () => {
  return (
    <div className="">
    <div className='text-white mt-5'>
      <button className='gheDuocChon'></button> <span className='ps-3' style={{fontSize: "30px",}}>Ghế đã Chọn</span>
      <br />
      <button className='gheDangChon'></button> <span className='ps-3' style={{fontSize: "30px",}}>Ghế đang Chọn</span>
      <br />
      <button className='ghe'></button> <span className='ps-3' style={{fontSize: "30px",}}>Ghế chưa Chọn</span>
    </div>

        {/*   table  */}
        <div className="mt-5">
        <div className="">
        <table className="table-default" border="" style={{width: "100%",}}>
          <thead>
          <tr className='text-white' style={{fontSize: "25px"}}>
          <th scope="col">Số ghế</th>
          <th scope="col">Giá 2</th>
          <th scope="col">Column 3</th>
          </tr>
          </thead>
        <tbody>
          <tr>
            <th>Số Ghế</th>
            <th>Giá</th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
        </table>
        </div>
        </div>

        {/*   test table  */}
        {/* <table className="table-default">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
        </table> */}

        {/*  */}
    </div>
  )
}

export default ThongTinDatGhe