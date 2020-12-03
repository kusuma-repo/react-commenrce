import React from 'react';

import { DirectoryMenuContainer } from './Directory.styles';
import { connect } from 'react-redux';
import { selectDirectoryForOverview } from '../../redux/directory/Directory.selector';
import { createStructuredSelector } from 'reselect';
import MenuItems from '../menu.item.component/Menu.item.component';
const DirectoryMenu = ({ directoryItem }) => {
  return (
    <DirectoryMenuContainer>
      {directoryItem.map(({ id, ...otherprops }) => (
        <MenuItems key={id} {...otherprops} />
      ))}
    </DirectoryMenuContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  directoryItem: selectDirectoryForOverview,
});
export default connect(mapStateToProps)(DirectoryMenu);
