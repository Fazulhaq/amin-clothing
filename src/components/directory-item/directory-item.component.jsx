import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({category}) => {

    const {imageUrl, title} = category;

    return (
        <div className="directory-item-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div className="body">
            <h2>{title.toUpperCase()}</h2>
            <Link className="title" to={`shop/${title}`}>
              <p>Shop Now</p>
            </Link>
          </div>
        </div>
    );
}

export default DirectoryItem;