import type { ReactElement } from "react";
import Layout from "../layout/main-layout";
import { ThreeItemGrid } from "../components/three-items";
import { Carousel } from "../components/carousel";

function home() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
    </>
  );
}

home.layout = (page: ReactElement) => <Layout>{page}</Layout>;

export default home;
