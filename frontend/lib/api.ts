import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'

const api = axios.create({
  baseURL: `${API_URL}/api`,
})

export interface Post {
  id: number
  attributes: {
    title: string
    slug: string
    excerpt: string
    content: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    featured_image?: {
      data?: {
        attributes: {
          url: string
          alternativeText?: string
          width: number
          height: number
        }
      }
    }
    gallery?: {
      data: Array<{
        attributes: {
          url: string
          alternativeText?: string
          width: number
          height: number
        }
      }>
    }
    author?: {
      data: {
        attributes: {
          name: string
          bio?: string
          avatar?: {
            data?: {
              attributes: {
                url: string
              }
            }
          }
        }
      }
    }
    category?: {
      data: {
        attributes: {
          name: string
          slug: string
        }
      }
    }
  }
}

export interface PostsResponse {
  data: Post[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export const getPosts = async (params?: {
  page?: number
  limit?: number
  featured?: boolean
  category?: string
}): Promise<Post[]> => {
  try {
    const queryParams = new URLSearchParams()
    
    if (params?.page) queryParams.append('pagination[page]', params.page.toString())
    if (params?.limit) queryParams.append('pagination[pageSize]', params.limit.toString())
    if (params?.featured) queryParams.append('filters[featured][$eq]', 'true')
    if (params?.category) queryParams.append('filters[category][slug][$eq]', params.category)
    
    queryParams.append('populate', 'deep')
    queryParams.append('sort', 'publishedAt:desc')

    const response = await api.get<PostsResponse>(`/posts?${queryParams.toString()}`)
    return response.data.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export const getPost = async (slug: string): Promise<Post | null> => {
  try {
    const response = await api.get<PostsResponse>(
      `/posts?filters[slug][$eq]=${slug}&populate=deep`
    )
    return response.data.data[0] || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export const getCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response.data.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export const getMediaUrl = (url?: string): string => {
  if (!url) return '/placeholder-image.jpg'
  if (url.startsWith('http')) return url
  return `${API_URL}${url}`
}