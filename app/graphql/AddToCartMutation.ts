import CartFragment from "./CartFragment";

const AddToCartMutation = `#graphql
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${CartFragment}
`;

export default AddToCartMutation;
