import Layout from "../components/layout";
import Title from "../components/title";

const Home = () => {
  return (
    <Layout>
      <Title>Hola Mundo</Title>
      <p>Aprendiendo NextJs</p>
      <style JSX>
        {" "}
        {`
                p{
                    color: darkgray;
                }
                p:hover{
                    color: darkred;
                }
            `}
      </style>
    </Layout>
  );
};

export default Home;
