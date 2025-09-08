import CartFragment from "#graphql/CartFragment";

const EditCartItemsMutation = `#graphql
  mutation EditCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${CartFragment}
`;

export default EditCartItemsMutation;
