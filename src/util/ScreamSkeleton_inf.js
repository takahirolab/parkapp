import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (

        <div className="home-maincontent-img-sk">
          <Skeleton variant="rect" width={750} height={424} className="skelton_border" />
          <Skeleton variant="rect" width={600} height={24} className="skelton_inf-parkname" />
          <Skeleton variant="rect" width={60} height={16} className="skelton_padding" />
        </div>




  );
}
