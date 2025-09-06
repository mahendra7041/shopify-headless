import type { ReactElement } from "react";
import Layout from "../layout/layout";
import { ThreeItemGrid } from "../components/grid/three-items";
import { Carousel } from "../components/carousel";
import Footer from "../layout/footer";

function home() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}

home.layout = (page: ReactElement) => <Layout>{page}</Layout>;

export default home;
