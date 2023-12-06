/* eslint-disable @typescript-eslint/no-explicit-any */
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Stack, Typography, styled } from '@mui/material'
import { PaginationCard } from '@/components/molecules/PaginationCard'
import { TableColumn } from '@/utils/types'
import { ReactNode } from 'react'

export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  customIdColumn?: keyof T
  tableHeader?: ReactNode
  onRowClick?: (item: T) => void
  isFiltered?: boolean
  page?: number
  onPageChange?: (page: number) => void
  pageCount?: number
  showPagination?: boolean
  height?: string
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  border: `0 1 7 0 ${theme.palette.shadow.SHADOW_GEAY}`,
  height: `min(${theme.spacing(161.5)},80vh)`,
  position: 'relative',
  borderRadius: theme.spacing(1.5),
  overflow: 'hidden',
}))

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: theme.palette.primary[100],
  borderTop: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
  borderBottom: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.mediumEmphasis,
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}))

function Table<T>({
  columns,
  data,
  customIdColumn = 'id' as keyof T,
  tableHeader,
  onRowClick,
  isFiltered,
  page = 1,
  pageCount = 3,
  onPageChange,
  showPagination = true,
  height,
}: Readonly<TableProps<T>>) {
  const handlePageChange = (_e: React.ChangeEvent<unknown>, page: number) => {
    onPageChange?.(page)
  }
  return (
    <TableContainer component={StyledPaper} sx={{ height }}>
      <Stack>{tableHeader}</Stack>
      <MuiTable size="small">
        <StyledTableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                align={column.align ?? 'left'}
                key={column.key as string}
              >
                <Typography>{column.label}</Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              sx={{
                cursor: 'pointer',
                '& th:first-child': {
                  pl: 4,
                },
              }}
              key={item[customIdColumn] as string}
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((column) => (
                <TableCell
                  component="th"
                  align={column.align ?? 'left'}
                  scope="row"
                  sx={{ p: 2 }}
                  key={`${column.key as string} + ${
                    item[customIdColumn] as string
                  }`}
                >
                  {column.customDefination
                    ? column.customDefination(item)
                    : (item[column.key] as string)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      {showPagination && (
        <Stack position="absolute" bottom="0" width="100%">
          <PaginationCard
            width="100%"
            height="100%"
            isFiltered={isFiltered}
            paginationProps={{
              count: pageCount,
              page: page,
            }}
            count={pageCount + ''}
            onPageChange={handlePageChange}
          />
        </Stack>
      )}
    </TableContainer>
  )
}

export default Table
