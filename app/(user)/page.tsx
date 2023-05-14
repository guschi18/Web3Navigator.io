import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import BlogList from "../../components/BlogList";
import Banner from "../../components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NFT from "@/components/NFT";
import Subscribe from "../../components/Subscribe" 



const query = groq`
*[_type == "post" && references(categories._ref, "bf5a9331-6e12-4166-8a35-084340505944")] {
  ...,
  author->,
  categories[]->,
}
| order(_createdAt asc)
`;



export const revalidate = 30;

export default async function HomePage() {
  


const posts = await client.fetch(query);
return (
  <>
  <Header />
  <Banner />
  <NFT />
  <BlogList posts={posts} />
  <Subscribe />
  <Footer />
  </>
  );
}
