import Image from "next/image";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1722711131407-5e5d7225515f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Heading 1",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1551446591-142875a901a1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Heading 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1551446591-142875a901a1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Heading 3",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Heading 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
    }
  ];

  return (
    <div className="grid font-poppins blog md:grid-cols-2 w-[100%] min-h-[20rem] text-white border-spacing-separate ">
      {blogPosts.map((post) => (
        <div key={post.id} className="border-2 border-gray-800 p-5 min-h-[20rem] h-fit gap-5 flex flex-col">
          <div className="flex justify-center items-center h-[50%] w-[100%]">
            <Image
              src={post.imageUrl}
              className="rounded-lg w-[50rem] h-[20rem]"    
              height="200"
              width="500"
              alt="thumbnail"

            />
          </div>
          <div className="flex flex-col justify-start items-start p-3">
            <h1 className="text-xl font-bold">{post.heading}</h1>
            <p>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
