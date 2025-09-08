import CollectionFragment from "#graphql/CollectionFragment";

const GetCollectionQuery = `#graphql
  query GetCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${CollectionFragment}
`;

export default GetCollectionQuery;
