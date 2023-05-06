import { getSession, signOut } from "next-auth/react";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client"
import BlogList2 from "../components/BlogList2"
import LoginBanner from "../components/LoginBanner"
import LoginFooter from "../components/LoginFooter"
import LoginHeader from '@/components/LoginHeader';

function User({ posts }) {
  return (
    <div className="max-w-7xl mx-auto">
      <LoginHeader />
      <div className="flex justify-center pb-4">
        <button className="bg-gradient-to-r from-indigo-500 to-emerald-500 text-white font-bold py-2 px-4 rounded" onClick={() => signOut({ redirect: "/" })}>Ausloggen</button>
      </div>
      <LoginBanner />
      <BlogList2 posts={posts} />
      <LoginFooter />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const query = groq`
  *[_type == "post" && references(categories._ref, "fcce9b19-fa3e-449e-b176-8ddf00cc803f")] {
    ...,
    author->,
    categories[]->,
  }
  | order(_createdAt asc)
`;

  const posts = await client.fetch(query);

  return {
    props: { user: session.user, posts },
  };
}

export default User;