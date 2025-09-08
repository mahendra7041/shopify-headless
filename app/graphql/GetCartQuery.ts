import CartFragment from "#graphql/CartFragment";

const GetCartQuery = `#graphql
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${CartFragment}
`;

export default GetCartQuery;
