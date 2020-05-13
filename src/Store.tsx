import React from 'react';
import {Provider} from 'mobx-react';
import {travelClubService} from './club';

function Store({children}: any){
  return (
    <Provider
      travelClubService={travelClubService}
      >
      {children}
    </Provider>
  );
}

export default Store;
