import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TwinTypo } from './index'
describe('TwinTypo Component', () => {
  it('renders TwinTypo with provided props', () => {
    const typoOneText = 'Hello'
    const typoTwoText = 'World'
    const variantOne = 'h1'
    const variantTwo = 'subtitle1'
    const TypoOneColor = 'rgb(25, 118, 210)'
    const TypoTwoColor = 'rgb(255, 0, 0)'
    const gap = '8px'

    const { getByText } = render(
      <TwinTypo
        typoOne={typoOneText}
        typoTwo={typoTwoText}
        variantOne={variantOne}
        variantTwo={variantTwo}
        TypoOneColor={TypoOneColor}
        TypoTwoColor={TypoTwoColor}
        gap={gap}
      />
    )

    const typoOneElement = getByText(typoOneText)
    expect(typoOneElement).toHaveStyle(`color: ${TypoOneColor}`)

    const typoTwoElement = getByText(typoTwoText)
    expect(typoTwoElement).toHaveStyle(`color: ${TypoTwoColor}`)
  })

  it('renders TwinTypo with default gap when gap is not provided', () => {
    const typoOneText = 'Hello'
    const typoTwoText = 'World'

    const { container } = render(
      <TwinTypo typoOne={typoOneText} typoTwo={typoTwoText} />
    )

    expect(container).toBeInTheDocument()
  })
})
