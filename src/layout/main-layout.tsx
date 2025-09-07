import type { ReactElement } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
