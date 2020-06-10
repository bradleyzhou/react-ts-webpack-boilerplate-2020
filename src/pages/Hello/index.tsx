import * as React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Page } from '@/components/Page';

import { greet, IHelloAction } from './store';
import { RootState } from '@/store';

function mapStateToProps(state: RootState) {
  return {
    name: state.hello.hello,
  };
}

function mapDispatchToProps(dispatch: Dispatch<IHelloAction>) {
  return { onWorld: () => dispatch(greet('World')) };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Hello(props: PropsFromRedux) {
  const { name, onWorld } = props;
  return (
    <Page className="hello-page">
      <h2 className="hello">{`Hello${name ? `, ${name}` : name}!`}</h2>
      <div>
        <button onClick={onWorld}>World</button>
      </div>
    </Page>
  );
}

const Connected = connector(Hello);
export { Connected as Hello };
