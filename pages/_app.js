import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Добавляем компонент Speed Insights */}
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;