import { render, screen } from '@testing-library/react'
import HomePageTeamplates from '.'
import Typography from '@/components/atoms/Typography'

describe('HomePageTemplates', () => {
  test('Render Currectly', () => {
    render(
      <HomePageTeamplates label="Candidates">
        <Typography>Home Page</Typography>
      </HomePageTeamplates>
    )
    screen.getByText('Candidates')
    screen.getByText('Home Page')
  })
})
