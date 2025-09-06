import ProductFragment from "./ProductFragment";

const GetProductsQuery = `#graphql
  query GetProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
    $first: Int = 100
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: $first) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${ProductFragment}
`;

export default GetProductsQuery;
