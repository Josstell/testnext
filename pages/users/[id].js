import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Title from '../../components/title'

export default function user({user}) {
  const router = useRouter();
  console.log(user);
  return (
    <Layout>
      <Title>User Detail</Title>

      <p>User ID : {router.query.id} </p>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return {
    props: {
      user
    }
  }
}

