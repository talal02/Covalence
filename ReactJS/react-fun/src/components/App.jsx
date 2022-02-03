import React from 'react';
import Test from './Test';

const App = () => {
  return (
    <div>
      <Test 
        stringTest="Talal"
        numTest={3.52}
        boolTest={true}
        undTest={undefined}
        nullTest={null}
      />
    </div>
  );
}

export default App;