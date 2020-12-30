import Head from "next/head";
import Layout from "../components/layout";
import Title from "../components/title";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Aprendamos nextjs</title>
        <meta name="description" content="En este curso aprenderas de nextjs" />
      </Head>
      <Title>Hola Mundo</Title>
      <p>Aprendiendo NextJs</p>
      <style jsx>
        {`
          p {
            color: darkgray;
          }
          p:hover {
            color: darkred;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
