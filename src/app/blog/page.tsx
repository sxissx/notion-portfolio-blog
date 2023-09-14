// "use client"
import React from "react"
import { Badge } from "@/components/ui"
import { PostsList, SearchBar } from "@/features/blog"
import { getAllPosts } from "@/lib/notion"

const keywords = [
  "career",
  "react",
  "node",
  "review",
  "personal",
  "databases",
  "remix",
  "typescript",
  "user experience",
  "css",
  "testing",
  "javascript",
  "productivity",
  "open source",
  "programming",
  "teaching",
  "state",
  "performance",
  "learning",
]

async function getData() {
  const posts = await getAllPosts({ includePages: false })
  return { posts }
}

const Blog = async () => {
  const { posts } = await getData()

  return (
    <div className="pt-8">
      <h1 className="mb-4 text-center	text-4xl font-bold">
        Learn development with great articles.
      </h1>
      <div className="container mb-10 max-w-3xl">
        <SearchBar />
      </div>
      <div className="container mb-6 max-w-6xl">
        <h2 className="mb-5 text-xl font-bold">Search blog by topics</h2>
        <div className="mb-10 flex flex-wrap gap-3">
          {keywords.map((keyword) => {
            // const selected = selectedTopics.includes(keyword)
            return (
              <Badge
                key={keyword}
                className="focus-ring cursor-pointer px-4 py-2"
                selected={false}
                // onClick={false}
                // disabled={Boolean(!visibleTags.has(tag)) ? !selected : false}
              >
                {keyword}
              </Badge>
            )
          })}
        </div>
        {posts && <PostsList posts={posts} />}
      </div>
    </div>
  )
}

export default Blog