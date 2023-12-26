import React from "react";
import Layout from "@/components/Layout";
import { AppWrapper } from "@/context/state";
import '../public/styles.css';

function MenuApp({ Component, pageProps }: any) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MenuApp;
