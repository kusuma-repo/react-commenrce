import './Menu.item.styles.scss';

const MenuItems = () => (
  <div className="menu-item">
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">CLothing</h1>
      <span className="subtitle">Crowns</span>
    </div>
  </div>
);

export default MenuItems;
