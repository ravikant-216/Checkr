import { renderHook, act } from '@testing-library/react'
import apiClient from '@/api/axios'
import usePagination from '.'

describe('usePagination hook', () => {
  const app = jest.spyOn(apiClient, 'get')
  app.mockImplementation(() =>
    Promise.resolve({
      data: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
      ],
    })
  )
  it('should fetch data on mount', async () => {
    const { result } = renderHook(() =>
      usePagination('https://jsonplaceholder.typicode.com/posts')
    )

    expect(result.current.loading).toBe(true)

    await act(() => {
      return Promise.resolve()
    })

    expect(result.current.loading).toBe(false)
    expect(result.current.data).toHaveLength(10)
  })

  it('should fetch data for a specific page', async () => {
    const { result } = renderHook(() =>
      usePagination('https://jsonplaceholder.typicode.com/posts')
    )

    act(() => {
      result.current.fetchParticularPage(3)
    })

    expect(apiClient.get).toHaveBeenCalled()
  })

  it('should change the limit', async () => {
    const { result } = renderHook(() =>
      usePagination('https://jsonplaceholder.typicode.com/posts')
    )

    await act(() => {
      result.current.changeLimit(20)
      result.current.nextPage()
      result.current.prevPage()
    })

    expect(apiClient.get).toHaveBeenCalled()
  })

  it('should handle errors', async () => {
    const app = jest.spyOn(apiClient, 'get')
    app.mockImplementation(() => Promise.reject(new Error('App')))

    const { result } = renderHook(() =>
      usePagination('https://jsonplaceholder.typicode.com/posts')
    )

    await act(() => {
      return Promise.resolve()
    })

    expect(result.current.error).toBeInstanceOf(Error)
  })
})
