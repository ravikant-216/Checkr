import { fireEvent, render, screen } from '@testing-library/react'
import HomePageTeamplates from '.'
import Typography from '@/components/atoms/Typography'
import useLogout from '@/hooks/useLogout'

jest.mock('@/hooks/useLogout', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('react-router-dom')
describe('HomePageTemplates', () => {
  test('Render Currectly', () => {
    render(
      <HomePageTeamplates label="Candidates">
        <Typography>Home Page</Typography>
      </HomePageTeamplates>
    )
    screen.getByText('Candidates')
    screen.getByText('Home Page')
    fireEvent.click(screen.getByAltText('logout icon'))
    expect(useLogout).toHaveBeenCalled()
  })
})
