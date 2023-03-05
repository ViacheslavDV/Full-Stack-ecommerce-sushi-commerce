import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Layout from "@/app/components/Layout/Layout";
import { persistor, store } from "@/app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider, QueryClient, Hydrate } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
 const [queryClient] = useState(() => new QueryClient());

 return (
  <QueryClientProvider client={queryClient}>
   <Hydrate state={pageProps.dehydratedState}>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <Layout>
       <Component {...pageProps} />
      </Layout>
     </PersistGate>
    </Provider>
   </Hydrate>
  </QueryClientProvider>
 );
}
