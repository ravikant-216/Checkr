import CheckboxLabels from '@/components/molecules/CheckBoxLabel'
import { useState, FC, useEffect } from 'react'
import FilterButton from '../FilterButton'
import Typography from '@/components/atoms/Typography'
import theme from '@/themes'
import {
  ADJUDICATION_LABEL,
  ADJUDICATION_LABEL_S,
  STATUS_LABEL,
  STATUS_LABEL_S,
} from '@/strings/constant'

export interface CheckboxFilterProps {
  onSelectedItemsChange: (
    statusItems: string[],
    adjudicationItems: string[]
  ) => void
  statuses: string[]
  adjudication?: string[]
}

const CheckboxFilter: FC<CheckboxFilterProps> = ({
  onSelectedItemsChange,
  statuses,
  adjudication = [],
}) => {
  const [checkedStatuses, setCheckedStatuses] = useState<string[]>([])
  const [checkedAdjudications, setCheckedAdjudications] = useState<string[]>([])

  useEffect(() => {
    onSelectedItemsChange(checkedStatuses, checkedAdjudications)
  }, [checkedStatuses, checkedAdjudications, onSelectedItemsChange])

  const handleCheckChange = (status: string, arrayName: string) => {
    const isChecked = (checkedItems: string[], status: string) =>
      checkedItems.includes(status)
    const updateCheckedItems = (
      checkedItems: string[],
      status: string,
      array: string[]
    ) => {
      if (status === array[0]) {
        return isChecked(checkedItems, status) ? [] : array
      } else {
        return isChecked(checkedItems, status)
          ? checkedItems.filter((item) => item !== status)
          : [...checkedItems, status]
      }
    }

    const newCheckedStatuses =
      arrayName === STATUS_LABEL_S
        ? updateCheckedItems(checkedStatuses, status, statuses)
        : checkedStatuses
    const newCheckedAdjudications =
      arrayName === ADJUDICATION_LABEL_S
        ? updateCheckedItems(checkedAdjudications, status, adjudication)
        : checkedAdjudications

    setCheckedStatuses(newCheckedStatuses)
    setCheckedAdjudications(newCheckedAdjudications)
    onSelectedItemsChange(newCheckedStatuses, newCheckedAdjudications)
  }

  return (
    <FilterButton>
      <Typography variant="body1" color={theme.palette.text.lowEmphasis}>
        {STATUS_LABEL}
      </Typography>
      {statuses.map((status) => (
        <CheckboxLabels
          key={status}
          label={status}
          checked={checkedStatuses.includes(status)}
          onChange={() => handleCheckChange(status, STATUS_LABEL_S)}
        />
      ))}
      {adjudication.length > 0 && (
        <>
          <Typography variant="body1" color={theme.palette.text.lowEmphasis}>
            {ADJUDICATION_LABEL}
          </Typography>
          {adjudication.map((status) => (
            <CheckboxLabels
              key={status}
              label={status}
              checked={checkedAdjudications.includes(status)}
              onChange={() => handleCheckChange(status, ADJUDICATION_LABEL_S)}
            />
          ))}
        </>
      )}
    </FilterButton>
  )
}

export default CheckboxFilter
