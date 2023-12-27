import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Joshua's Myxellia Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}