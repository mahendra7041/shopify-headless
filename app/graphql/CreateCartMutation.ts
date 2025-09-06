import CartFragment from "./CartFragment";

const CreateCartMutation = `#graphql
  mutation CreateCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        ...cart
      }
    }
  }
  ${CartFragment}
`;

export default CreateCartMutation;
