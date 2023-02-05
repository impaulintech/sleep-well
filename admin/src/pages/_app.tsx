import "~/shared/css/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen h-full">
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </div>
  );
}
