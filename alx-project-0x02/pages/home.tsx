import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
export default function Home() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
    setShowModal(false);
  };

  return (
   
    <div className="p-6 space-y-4">
        <Header />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Add Post
      </button>

      {showModal && <PostModal onSubmit={addPost} />}

      {posts.map((post, i) => (
        <Card key={i} title={post.title} content={post.content} />
      ))}
    </div>
  );
}
