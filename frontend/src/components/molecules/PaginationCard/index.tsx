import { Icon } from '@/components/atoms/Icon'
import theme from '@/themes'
import {
  Box,
  Pagination,
  SxProps,
  styled,
  PaginationProps,
} from '@mui/material'
import Typography from '@/components/atoms/Typography'
import ArrowDown from '@Assets/icons/Arrow_Down.svg'
import { paginationcardDetails } from '@/strings/constant'

export interface PaginationCardProps {
  isFiltered?: boolean
  count?: string
  width: string
  height: string
  sx?: SxProps
  paginationProps?: PaginationProps
  onPageChange?: (event: React.ChangeEvent<unknown>, pageNo: number) => void
}

const Wrapper = styled(Box)(({ width, height }: PaginationCardProps) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: width,
  height: height,
  background: theme.palette.structural.STRUCTURAL_WHITE,
  borderTop: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
  padding: '10px 12px',
}))

const LeftBox = styled(Box)({
  display: 'flex',
  gap: '3px',
  alignItems: 'center',
})

const StyledBox = styled(Box)({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
})

const Dropdown = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '120px',
  height: '30px',
  border: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
  borderRadius: theme.spacing(1),
  gap: theme.spacing(3),
})

const paginationStyles = {
  '.css-1gl0o41-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
    background: theme.palette.primary[300],
    color: theme.palette.primary[500],
  },
}

export const PaginationCard = ({
  width,
  height,
  isFiltered,
  count,
  sx,
  paginationProps,
  onPageChange,
}: PaginationCardProps) => {
  return (
    <Wrapper width={width} height={height} sx={sx}>
      {!isFiltered ? (
        <>
          <StyledBox>
            <LeftBox>
              <Typography
                variant="caption2"
                color={theme.palette.text.highEmphasis}
              >
                {paginationcardDetails.count}
              </Typography>
              <Typography
                variant="caption2"
                color={theme.palette.text.mediumEmphasis}
              >
                {paginationcardDetails.result}
              </Typography>
            </LeftBox>
            <Dropdown>
              <Typography
                variant="caption2"
                color={theme.palette.text.highEmphasis}
              >
                {paginationcardDetails.Perpage}
              </Typography>
              <Icon src={ArrowDown} alt="Arrow Down" />
            </Dropdown>
          </StyledBox>
          <Pagination
            count={3}
            {...paginationProps}
            onChange={onPageChange}
            size="small"
            sx={paginationStyles}
            shape="rounded"
          />
        </>
      ) : (
        <LeftBox>
          <Typography
            variant="caption2"
            color={theme.palette.text.highEmphasis}
          >
            {count}
          </Typography>
          <Typography
            variant="caption2"
            color={theme.palette.text.mediumEmphasis}
          >
            {paginationcardDetails.resultsfound}
          </Typography>
        </LeftBox>
      )}
    </Wrapper>
  )
}
