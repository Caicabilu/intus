import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import FeaturedPosts from '@/components/FeaturedPosts'
import About from '@/components/About'
import Newsletter from '@/components/Newsletter'
import { getPosts, getProducts } from '@/lib/api'

export default async function Home() {
  const products = await getProducts({ featured: true, limit: 3 })
  const posts = await getPosts({ limit: 3 })

  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <FeaturedPosts posts={posts} />
      <About />
      <Newsletter />
    </>
  )
}