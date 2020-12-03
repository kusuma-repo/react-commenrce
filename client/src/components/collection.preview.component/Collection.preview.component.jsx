import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './Collection.preview.styles';

import { withRouter } from 'react-router-dom';
import CollectionItem from '../collections.item.component/Collection.item.component';
const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default withRouter(CollectionPreview);
