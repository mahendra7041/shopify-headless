import SeoFragment from "#graphql/SeoFragment";

const PageFragment = `#graphql
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
    }
  }
  ${SeoFragment}
`;

export default PageFragment;
