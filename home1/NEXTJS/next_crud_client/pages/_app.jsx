import App from "next/app";
import React from "react";
import { createWrapper } from "next-redux-wrapper";
import "antd/dist/antd.css";

import store from "../Redux/store";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.getServerSideProps = async ({ Component, ctx }) => {
  // we can dispatch from here too

  const pageProps = Component.getServerSideProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps: pageProps };
};

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
