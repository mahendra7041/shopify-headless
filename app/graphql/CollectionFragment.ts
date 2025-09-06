import SeoFragment from "./SeoFragment";

const CollectionFragment = `#graphql
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    updatedAt
  }
  ${SeoFragment}
`;

export default CollectionFragment;
