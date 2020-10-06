import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (
    <div className="container FindParksResult__margin-top">
      <div className="FindParksResult-items FindParksResult-items__width" >
        <div className="FindParksResult-item">
          <Skeleton variant="rect" width={100} height={286} className="skelton_padding" />
        </div>
        <div className="FindParksResult-item">
          <Skeleton variant="rect" width={100} height={386} className="skelton_padding" />
        </div>
        <div className="FindParksResult-item">
          <Skeleton variant="rect" width={100} height={486} className="skelton_padding" />
        </div>
        <div className="FindParksResult-item">
          <Skeleton variant="rect" width={100} height={146} className="skelton_padding" />
        </div>
        <div className="FindParksResult-item">
          <Skeleton variant="rect" width={100} height={236} className="skelton_padding" />
        </div>
        <div className="FindParksResult-item">
          <Skeleton variant="rect" width={100} height={126} className="skelton_padding" />
        </div>

        </div>

      </div>

  );
}
