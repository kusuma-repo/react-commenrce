import './Menu.item.styles.scss';
import { withRouter } from 'react-router-dom';
const MenuItems = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Crowns</span>
    </div>
  </div>
);

export default withRouter(MenuItems);
