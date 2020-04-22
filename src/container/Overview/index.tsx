import React from 'react';
import Detail from './detail';

class Overview extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Detail name={'hello world'} from={'test'}/>
      </div>
    );
  }
}

export default Overview;
