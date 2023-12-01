import apiClient from '@/api/axios'
import { useCallback, useEffect, useState } from 'react'

function usePagination<T>(url: string, initialPage = 1, initialLimit = 10) {
  const [page, setPage] = useState<number>(initialPage)
  const [limit, setLimit] = useState<number>(initialLimit)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)
  const [data, setData] = useState<T[]>([])

  const nextPage = () => {
    setPage(page + 1)
    fetchData()
  }
  const prevPage = () => {
    setPage(page - 1)
    fetchData()
  }

  const fetchParticularPage = (pageNumber: number) => {
    setPage(pageNumber)
    fetchData()
  }

  const changeLimit = (newLimit: number) => {
    setPage(1)
    setLimit(newLimit)
  }
  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await apiClient.get(url, {
        params: { _page: page, _limit: limit },
      })
      setData(response.data as T[])
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
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
