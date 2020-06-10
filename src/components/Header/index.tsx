import * as React from 'react';
import { connect } from 'react-redux';

function Header() {
  return <header className="header">This is header.</header>;
}

const Connected = connect()(Header);
export { Connected as Header };
