import type { ReactElement } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { WelcomeToast } from "../components/welcome-toast";
import { Toaster } from "sonner";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
        <Toaster closeButton />
        <WelcomeToast />
      </main>
      <Footer />
    </>
  );
}
