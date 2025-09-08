import PageFragment from "#graphql/PageFragment";

export const GetPageQuery = `#graphql
  query GetPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${PageFragment}
`;

export default GetPageQuery;
