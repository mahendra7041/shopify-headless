import PageFragment from "#graphql/PageFragment";

const GetPagesQuery = `#graphql
  query GetPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${PageFragment}
`;

export default GetPagesQuery;
