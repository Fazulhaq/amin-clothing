import { Link } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.jsx";

const DirectoryItem = ({category}) => {

    const {imageUrl, title} = category;

    return (
        <DirectoryItemContainer>
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2>{title}</h2>
            <Link className="title" to={`shop/${title}`}>
              <p>Shop Now</p>
            </Link>
          </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;