import React from 'react';
import { Params } from './enum';
import styles from './styles.scss';

class Detail extends React.Component<Params> {
  constructor(props: Params) {
    super(props);
  }

  public render() {
    const { name, from } = this.props;

    return (
        <div className={`text-center ${styles.pad}`}>
          {name}
          ----{from}
        </div>
    );
  }
}

export default Detail;
