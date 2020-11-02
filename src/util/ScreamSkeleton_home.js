import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (

      <div className="FindParksResult-items-pc__home" >
        <div className="FindParksResult-item-pc__home">
          <Skeleton variant="rect" width={240} height={240} className="skelton_border" />
          <Skeleton variant="rect" width={180} height={16} className="skelton_padding" />

        </div>
        <div className="FindParksResult-item-pc__home">
          <Skeleton variant="rect" width={240} height={240} className="skelton_border" />
          <Skeleton variant="rect" width={180} height={16} className="skelton_padding" />

        </div>
        <div className="FindParksResult-item-pc__home">
          <Skeleton variant="rect" width={240} height={240} className="skelton_border" />
          <Skeleton variant="rect" width={180} height={16} className="skelton_padding" />

        </div>


        </div>

  );
}
