import React from 'react';
import { Menu } from 'antd';
import { menus, isActive } from './menus';
import styles from './styles.scss';

interface params {
  pathname: string,
  history: object,
};

class TopNav extends React.Component<params> {
  constructor(props: params) {
    super(props);
    this.state = {};
  }

  // jump(path: string) {
  //   this.props.history.push(path);
  // }

  public render() {
    // const content = _.map(menus, m => (
    //   <Menu.Item
    //     // onClick={() => this.jump(m.path)}
    //   >
    //     {m.name}
    //   </Menu.Item>
    // ));

    return (
      <Menu>
        {/*{content}*/}
      </Menu>
    );
  }
}

export default TopNav;
