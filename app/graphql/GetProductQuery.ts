import ProductFragment from "./ProductFragment";

const GetProductQuery = `#graphql
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${ProductFragment}
`;

export default GetProductQuery;
