import Router from "next/router";
import Layout from '../components/Layout'
import '../styles/globals.scss'
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 3,
  color: "#61d4fb",
  className: "z-100",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp