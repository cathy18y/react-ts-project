import React from 'react';
import { withRouter } from 'react-router';
// import TopNav from 'testcom/TopNav';
import './styles.scss';

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        // const { location: { pathname }, history } = this.props;
        console.log(this.props);

        return (
            <div>
                <div>
                    {/*<TopNav pathname={pathname} history={history} />*/}
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(App);
