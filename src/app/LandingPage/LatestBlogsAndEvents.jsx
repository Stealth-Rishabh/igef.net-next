"use client";
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Heading from "@/components/Heading2";
import Container from "@/components/wrappers/Container";
import { AnimatedList } from "@/components/ui/animated-list";
import Image from "next/image";

export default function LatestBlogsAndEvents() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://www.igef.net/blog/wp-json/wp/v2/posts/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching blog posts:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  // Get the first (latest) post for the FirstBlog component
  const latestPost = posts.length > 0 ? posts[0] : null;

  // Get posts 2-4 (indices 1-3) for the AnimatedList
  const eventPosts = posts.length > 1 ? posts.slice(1, 5) : [];

  return (
    <Container className="">
      <Heading
        title="Explore Latest Blogs"
        titleClassName="lg:font-extrabold font-bold text-secondary-color"
        className="w-full text-center sm:col-span-4 "
      />

      {isLoading ? (
        <div className="flex items-center justify-center h-[500px]">
          <p>Loading blog posts...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-[500px]">
          <p className="text-red-500">Error: {error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 h-[720px] sm:max-h-[500px]">
          {latestPost && 
          (<a href={latestPost.link}> <FirstBlog post={latestPost} /> </a>)
          }
          <div className="grid grid-cols-1 gap-5 relative overflow-hidden h-full">
            <AnimatedList>
              {eventPosts.map((post) => (
                <a href={post.link} key={post.id}>
                  <EventCard
                    key={post.id}
                    id={post.id}
                    image={
                    post.blog_post_layout_featured_media_urls?.full?.[0] || ""
                  }
                  title={post.title?.rendered || ""}
                  date={new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    })}
                  />
                </a>
              ))}
            </AnimatedList>
          </div>
        </div>
      )}
    </Container>
  );
}

const EventCard = ({ id, image, title, date, link }) => {
  return (
    <a href={link} className="block">
      <Card key={id} className="p-0 rounded-none ">
        <CardContent className="flex p-0 space-x-3 sm:space-x-4 h-32 sm:h-32">
          <Image
            src={image}
            alt={title}
            width={200}
            height={128}
            className="object-cover h-full aspect-video"
          />
          <div className="flex flex-col items-start justify-center flex-grow gap-2 sm:gap-3 ml-2">
            <span className="top-0 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-white w-fit sm:mx-0 bg-secondary-color ">
              Trending
            </span>
            <p className="flex items-center mr-2 text-xs sm:text-lg font-semibold text-red-600">
              <Calendar size="14" className="mr-2 text-red-600 " /> {date}
            </p>
            <p
              className="text-sm sm:text-lg font-semibold sm:font-bold text-gray-800 line-clamp-1 pr-2"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

const FirstBlog = ({ post, link }) => {
  const imageUrl = post.blog_post_layout_featured_media_urls?.full?.[0] || "";
  const title = post.title?.rendered || "";
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    
      <Card className="relative rounded-none sm:h-full h-[262px] overflow-hidden">
        <CardContent className="p-0 rounded-none sm:h-full h-[262px]">
          <div className="h-full ">
            <Image
              src={imageUrl}
              alt="Main event"
              fill
              className="object-cover blur-sm aspect-video"
            />
            <div className="absolute  bottom-0 left-0 right-0 p-3 space-y-2 sm:p-10 sm:space-y-4 bg-gradient-to-t from-black to-transparent">
              <div className="relative space-y-2">
                <Image
                  src={imageUrl}
                  alt="Main event"
                  width={400}
                  height={225}
                  className="object-contain w-full h-full aspect-[16:9]  mt-5"
                />

                <div className="space-y-1 mt-5">
                  <span className="top-0 px-4 py-1 mt-5 mx-auto text-sm font-semibold tracking-wide text-white sm:text-lg w-fit sm:mx-0 bg-secondary-color ">
                  Trending
                </span>

                <p className="flex items-center mr-2 text-sm font-semibold text-white sm:text-lg">
                  <Calendar size={20} className="mr-2 text-white" /> {date}
                </p>
                <p
                  className="font-semibold text-white text-sm sm:text-lg sm:font-bold "
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                </div>
                
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
   
  );
};
