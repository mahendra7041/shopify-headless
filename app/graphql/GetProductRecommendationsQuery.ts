import ProductFragment from "#graphql/ProductFragment";

const GetProductRecommendationsQuery = `#graphql
  query GetProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${ProductFragment}
`;

export default GetProductRecommendationsQuery;
