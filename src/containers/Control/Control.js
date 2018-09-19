import React from 'react';
import NavBar from '../NavBar/NavBar';
import ItemInput from '../Input/Input';
import WoodConfig from '../WoodConfig/WoodConfig';
import Result from '../../components/Result/Result';

const Control = ({ display }) => {
  let currentView;

  if(display === 'inputView') {
    currentView = <ItemInput />
  } else if (display === 'woodConfigView') {
    currentView = <WoodConfig />
  } else {
    currentView = <Result />
  }

    return (
      <div>
        <NavBar />
        <div>
          {currentView}
        </div>
      </div>
    )
}

export default Control;
