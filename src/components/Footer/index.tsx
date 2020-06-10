import * as React from 'react';
import { connect } from 'react-redux';

function Footer() {
  return <footer className="footer">This is footer.</footer>;
}

const Connected = connect()(Footer);
export { Connected as Footer };
