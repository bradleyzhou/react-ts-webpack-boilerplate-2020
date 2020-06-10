import * as React from 'react';

export function Page(props: any) {
  const { className, children } = props;

  return (
    <div {...props} className={`page-content ${className}`}>
      {children}
    </div>
  );
}
