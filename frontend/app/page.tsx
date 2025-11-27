import Hero from '@/components/Hero'
import FeaturedPosts from '@/components/FeaturedPosts'
import About from '@/components/About'
import Newsletter from '@/components/Newsletter'
import { getPosts } from '@/lib/api'

export default async function Home() {
  const posts = await getPosts({ limit: 3 })

  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
      <About />
      <Newsletter />
    </>
  )
}