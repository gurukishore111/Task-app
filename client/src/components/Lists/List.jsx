import React from 'react';
import './List.css';

function List() {
  return (
    <div className="container p-3">
      <div className="listItem">
        <img
          src="https://staging.tenantcube.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdThqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c8fdd58ac55f96480880b45889ceec5222ce6fb2/29de893bc41539190cf91b13db5cf386.jpeg"
          alt="img"
          style={{
            width: 170,
            height: 240,
            objectFit: 'cover',
            borderRadius: '4px',
          }}
        />
        <div className="listContent">
          <div className="border py-2 px-3 mb-2 rounded d-inline-block tag">
            Apartment
          </div>
          <div className="listContent">
            <h3 className="nanum-font">Vintage</h3>
            <p className="text-muted mb-1">
              {' '}
              in No.11-231 100 Young Street, Frankston, Victoria, 3199, AU{' '}
            </p>
            <div className="listingInfo">
              <span className="pr-4">
                <i className="fas fa-bed"></i>
                <span className="ml-2">
                  &nbsp;<strong>3.0</strong>&nbsp;Bedroom &nbsp;
                </span>
              </span>
              <span className="pr-4">
                <i className="fas fa-bath"></i>
                <span className="ml-2">
                  &nbsp;<strong>2.0</strong>&nbsp;Bathroom &nbsp;
                </span>
              </span>
              <span className="pr-4">
                <i className="fas fa-mountain"></i>
                <span className="ml-2">
                  &nbsp;<strong>1600</strong>&nbsp;Area &nbsp;
                </span>
              </span>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-weight-bold ts-18">$1600.0 </span>
                <span className="text-muted"> / Monthly Rent </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
