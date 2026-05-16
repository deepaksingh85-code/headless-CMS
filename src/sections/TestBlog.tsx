import { getPosts } from "../lib/getPosts"
export default async function TestBlog() {

  const posts = await getPosts();

  return (
    <section className="py-20 px-6">

      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-5xl font-black mb-10">
          Latest Posts
        </h2>

        <div className="space-y-6">

          {posts.map((post: any) => (

            <div
              key={post.id}
              className="border border-black/10 p-6 rounded-[30px]"
            >

              <h3 className="text-3xl font-bold">
                {post.title}
              </h3>

              <p className="text-black/50 mt-2">
                {post.date}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}