import CollectionFragment from "./CollectionFragment";

const GetCollectionsQuery = `#graphql
  query GetCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${CollectionFragment}
`;

export default GetCollectionsQuery;
