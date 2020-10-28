import React from 'react';
import './Directory.component.styles.scss';
import sections from './directory.data';
import MenuItems from '../menu.item.component/Menu.item.component';
class DirectoryMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu ">
        {sections.map(({ id, ...otherprops }) => (
          <MenuItems key={id} {...otherprops} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
