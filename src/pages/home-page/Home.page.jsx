import React from 'react';
import './Home.styles.scss';
import { connect } from 'react-redux';
import { fetchdirectoryStart } from '../../redux/directory/Directory.action';

import DirectoryContainer from '../../components/directory.component/Directory.container.component';

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchdirectoryStart } = this.props;
    fetchdirectoryStart();
  }
  render() {
    return (
      <div className="homepage">
        <DirectoryContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => ({
  fetchdirectoryStart: () => dispatchEvent(fetchdirectoryStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
