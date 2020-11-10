import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (

        <div>
          <Skeleton variant="rect" width={'calc(100vw - 16px)'} height={' calc(100vw - 16px)'} className="skelton_border" />
          <Skeleton variant="rect" width={'calc(100vw - 16px)'} height={'height: 20px;'} className="skelton_inf-parkname" />
          <Skeleton variant="rect" width={'calc(50vw - 16px);'} height={'height: 20px;'} className="skelton_padding" />
        </div>




  );
}
{/* <div className="home-maincontent-img-sk">
<Skeleton variant="rect" className="skeltonSP_border_parkInf_Img" />
<Skeleton variant="rect"className="skeltonSP_border_parkInf_Name" />
<Skeleton variant="rect"className="skeltonSP_border_parkInf_desc" />
</div>


 */}
