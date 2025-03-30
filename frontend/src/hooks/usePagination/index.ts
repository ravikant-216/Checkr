import apiClient from '@/api/axios'
import { useCallback, useEffect, useState } from 'react'

function usePagination<T>(url: string, initialPage = 1, initialLimit = 10) {
  const [page, setPage] = useState<number>(initialPage)
  const [limit, setLimit] = useState<number>(initialLimit)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)
  const [data, setData] = useState<T[]>([])

  // Debug: Log the initial API endpoint, page, and limit
  console.log('Pagination Hook Initialized:', {
    url,
    initialPage,
    initialLimit,
  })

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1)
    console.log('Next Page Triggered:', page + 1)
    fetchData()
  }

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1)) // Ensure page does not go below 1
    console.log('Previous Page Triggered:', page - 1)
    fetchData()
  }

  const fetchParticularPage = (pageNumber: number) => {
    setPage(pageNumber)
    console.log('Fetching Particular Page:', pageNumber)
    fetchData()
  }

  const changeLimit = (newLimit: number) => {
    setPage(1) // Reset to the first page
    setLimit(newLimit)
    console.log('Limit Changed:', newLimit)
    fetchData()
  }

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null) // Reset error state

      // Debug: Log the request parameters
      console.log('Fetching Data:', { url, page, limit })

      const response = await apiClient.get(url, {
        params: { _page: page, _limit: limit },
      })

      // Debug: Log the raw response
      console.log('Raw Response:', response)

      // Validate status code
      if (response.status !== 200) {
        throw new Error(`HTTP Error: ${response.status}`)
      }

      // Debug: Log the response content
      console.log('Response Content:', response.data)

      // Ensure data is set only if `response.data.content` is valid
      if (Array.isArray(response.data)) {
        setData(response.data as T[])
      } else {
        throw new Error(
          'Invalid response format: Expected an array in "content".'
        )
      }
    } catch (err) {
      console.error('Error Fetching Data:', err)
      setError(err)
    } finally {
      setLoading(false)
      console.log('Fetching Completed')
    }
  }, [url, page, limit])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    fetch: fetchData,
    page,
    limit,
    nextPage,
    prevPage,
    changeLimit,
    loading,
    error,
    data,
    fetchParticularPage,
  }
}

export default usePagination
