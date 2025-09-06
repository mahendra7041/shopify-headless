import type { ReactElement } from "react";
import { CartProvider } from "../components/cart/cart-context";
import { Navbar } from "./navbar";

export default function AppLayout({ children }: { children: ReactElement }) {
  return (
    <CartProvider>
      <Navbar />
      <main>{children}</main>
    </CartProvider>
  );
}
