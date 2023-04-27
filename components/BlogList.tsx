import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
    posts: Post[];
};
function BlogList({posts}: Props) {
  return (
    <div className="max-w-7xl mx-auto">
        <div>
        {/*Posts */}
        {posts.map(post => (
            <div key={post._id} className="flex flex-col group cursor-pointer">
              <div className="relativ w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image 
                className="object-cover jpbject-left
                lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20
            bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p className="text-s">
                        {new Date(post._createdAt).toLocaleDateString
                        ("de", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                })}
              </p>
                  </div>
                </div>
              </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default BlogList;