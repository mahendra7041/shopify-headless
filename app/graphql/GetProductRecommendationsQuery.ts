import ProductFragment from "#graphql/ProductFragment";

const GetProductRecommendationsQuery = `#graphql
  query GetProductRecommendations($productHandle: String!) {
    productRecommendations(productHandle: $productHandle) {
      ...product
    }
  }
  ${ProductFragment}
`;

export default GetProductRecommendationsQuery;
