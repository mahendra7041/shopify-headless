import type { ReactElement } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { WelcomeToast } from "../components/welcome-toast";
import { Toaster } from "sonner";
import { CartProvider } from "../components/cart/cart-context";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>
          {children}
          <Toaster closeButton />
          <WelcomeToast />
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}
