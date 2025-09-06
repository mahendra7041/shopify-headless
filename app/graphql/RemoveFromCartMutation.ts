import CartFragment from "./CartFragment";

const RemoveFromCartMutation = `#graphql
  mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${CartFragment}
`;

export default RemoveFromCartMutation;
