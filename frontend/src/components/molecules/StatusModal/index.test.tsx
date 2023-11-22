import { render, screen } from '@testing-library/react'
import StatusModal from '.'
import { PRE_ADVANCE_ACTION_NOTICE_SENT } from '@/strings/constant'

describe('Testing Status Modal', () => {
  test('Check Render Properly Or not', () => {
    render(<StatusModal open={true} />)
    screen.getByText(PRE_ADVANCE_ACTION_NOTICE_SENT)
  })
})
