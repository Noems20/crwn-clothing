import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './DirectoryItem.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title}`);
  return (
    // <DirectoryItemContainer as={Link} to={`shop/${title}`}>
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
