import "~/shared/css/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen h-full px-9">
      <Component {...pageProps} />
    </div>
  );
}
