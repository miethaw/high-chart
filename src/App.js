import React from 'react';
import HighCharts from './highChart';
import LineChart from './lineChart';
import CandleChart from './candleChart';

function App() {
  return (
    <div className='d-flex flex-wrap p-3'>
      <div className='col-lg-8 mx-auto' style={{marginBottom:'15px'}}>
        <HighCharts />
      </div>
      <div className='col-lg-8 mx-auto'>
        <CandleChart />
      </div>
    </div>
  );
}

export default App;
