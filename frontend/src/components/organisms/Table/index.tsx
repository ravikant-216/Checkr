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
import { ReactNode, useMemo } from 'react'

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
  border: `1px solid ${theme.palette.shadow.SHADOW_GRAY || '#ddd'}`,
  height: '100%',
  position: 'relative',
  borderRadius: theme.spacing(1.5),
  overflow: 'hidden',
}))

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: theme.palette.primary[100] || '#f0f0f0',
  borderTop: `1px solid ${
    theme.palette.structural?.STRUCTURAL_STROKE || '#ccc'
  }`,
  borderBottom: `1px solid ${
    theme.palette.structural?.STRUCTURAL_STROKE || '#ccc'
  }`,
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text?.mediumEmphasis || '#000',
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
  height = 'auto',
}: Readonly<TableProps<T>>) {
  const handlePageChange = (
    _e: React.ChangeEvent<unknown>,
    nextPage: number
  ) => {
    onPageChange?.(nextPage)
  }

  const renderRows = useMemo(() => {
    if (!data || data.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={columns.length} align="center">
            <Typography variant="body1" color="text.secondary">
              No data available
            </Typography>
          </TableCell>
        </TableRow>
      )
    }

    return data.map((item) => (
      <TableRow
        sx={{
          cursor: onRowClick ? 'pointer' : 'default',
          '& th:first-child': { pl: 4 },
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
            key={`${column.key as string}-${item[customIdColumn] as string}`}
          >
            {column.customDefination
              ? column.customDefination(item)
              : (item[column.key] as string)}
          </TableCell>
        ))}
      </TableRow>
    ))
  }, [data, columns, onRowClick, customIdColumn])

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
                aria-label={`Column: ${column.label}`}
              >
                <Typography variant="subtitle2">{column.label}</Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody sx={{ height: 'fit-content' }}>{renderRows}</TableBody>
      </MuiTable>
      {/* Ensure Pagination is directly below the table */}
      {showPagination && (
        <Stack width="100%" py={2} justifyContent="center" alignItems="center">
          <PaginationCard
            width="100%"
            height="100%"
            isFiltered={isFiltered}
            paginationProps={{
              count: pageCount,
              page: page,
            }}
            count={pageCount.toString()}
            onPageChange={handlePageChange}
          />
        </Stack>
      )}
    </TableContainer>
  )
}

export default Table
