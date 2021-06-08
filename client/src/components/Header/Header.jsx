import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container navBar">
        <a
          className="navbar-brand nanum-font"
          href="/"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://staging.tenantcube.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTRqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7e0cd2a43963f8e46c05d1857a1eaac87ba87c53/3d_logo_sample_1024x1024.png"
            className="d-inline-block align-text-top logo_img"
            alt="logo"
          />
          <h4 style={{ marginLeft: '12px' }}>Trafalgar Organization</h4>
        </a>
        <div className="d-flex email">
          <i className="far fa-envelope" />
          <a href="/">Email Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
