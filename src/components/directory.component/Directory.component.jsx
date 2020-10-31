import React from 'react';
import './Directory.component.styles.scss';
import { connect } from 'react-redux';
import { selectDirectory } from '../../redux/directory/Directory.selector';
import { createStructuredSelector } from 'reselect';
import MenuItems from '../menu.item.component/Menu.item.component';
const DirectoryMenu = ({ directoryItem }) => {
  return (
    <div className="directory-menu ">
      {directoryItem.map(({ id, ...otherprops }) => (
        <MenuItems key={id} {...otherprops} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  directoryItem: selectDirectory,
});
export default connect(mapStateToProps)(DirectoryMenu);
