import { Icon } from '@/components/atoms/Icon'
import { Box, Stack, styled } from '@mui/material'
import backArrow from '@Assets/icons/Back.svg'
import Divider from '@mui/material/Divider'
import theme from '@/themes'
import Typography from '@/components/atoms/Typography'
import CheckboxLabels from '@/components/molecules/CheckBoxLabel'
import { ButtonComponent } from '@/components/atoms/Button'
import {
  TITLE,
  FROM_LABEL,
  FROM_EMAIL,
  TO_LABEL,
  TO_EMAIL,
  SUBJECT_LABEL,
  SUBJECT_TEXT,
  GREETING,
  INTRO_TEXT,
  CHARGES_LABEL,
  CHARGE_1,
  CHARGE_2,
  CHARGE_3,
  DISPUTE_TEXT,
  SIGN_OFF,
  SIGN_OFF_NAME,
  AUTO_SEND_LABEL,
  AUTO_SEND_DAYS,
  AUTO_SEND_DAYS_LABEL,
  BUTTON_TEXT,
} from '@/strings/constant'
import { useState } from 'react'

export interface PreAdverseCardProps {
  onPreviewClick?: () => void
  onBackClick?: () => void
}
const StyledStack = styled(Stack)({
  background: theme.palette.structural.STRUCTURAL_WHITE,
  borderRadius: theme.spacing(1.25),
  padding: theme.spacing(3),
})
const StyledIconStack = styled(Stack)({
  padding: theme.spacing(1),
  cursor: 'pointer',
  borderRadius: theme.spacing(1.25),
  border: `1px solid ${theme.palette.structural.STRUCTURAL_STROKE}`,
})

const LabelEmailPair = ({ label, email }: { label: string; email: string }) => (
  <Box padding={'2vh'}>
    <Typography variant="caption1" color={'text.highEmphasis'}>
      {label}
    </Typography>
    <Typography variant="caption1" color={'text.mediumEmphasis'} ml={1}>
      {email}
    </Typography>
  </Box>
)

const PreAdverseCard = ({
  onBackClick,
  onPreviewClick,
}: PreAdverseCardProps) => {
  const [selectedCharge, setSelectedCharge] = useState<string | null>(null)

  const charges = [CHARGE_1, CHARGE_2, CHARGE_3]

  const handleCheckboxChange = (charge: string) => {
    setSelectedCharge(charge)
  }
  return (
    <Box>
      <Stack direction={'row'} gap={2} marginBottom={theme.spacing(5)}>
        <Icon
          src={backArrow}
          alt="back"
          style={{ cursor: 'pointer' }}
          onClick={onBackClick}
        ></Icon>
        <Typography variant="subtitle1" color={'text.highEmphasis'}>
          {TITLE}
        </Typography>
      </Stack>
      <Box
        sx={{
          height: '100%',
          borderRadius: theme.spacing(3),
          background: theme.palette.structural.STRUCTURAL_WHITE,
          boxShadow: `0px ${theme.spacing(0.5)}px ${theme.spacing(7)}px 0px ${
            theme.palette.structural.STRUCTURAL_SHADOW
          }`,
        }}
      >
        <LabelEmailPair label={FROM_LABEL} email={FROM_EMAIL} />
        <Divider />
        <LabelEmailPair label={TO_LABEL} email={TO_EMAIL} />
        <Divider />
        <Box padding={'2vh'}>
          <Typography variant="caption1" color={'text.highEmphasis'}>
            {SUBJECT_LABEL}
          </Typography>
          <Typography variant="caption1" color={'text.mediumEmphasis'} ml={1}>
            {SUBJECT_TEXT}
          </Typography>
        </Box>
        <Divider />
        <Box
          paddingLeft={'2vh'}
          paddingTop={'2.5vh'}
          marginBottom={'5vh'}
          display="flex"
          flexDirection={'column'}
          gap={'1vh'}
        >
          <Typography variant="body2" color={'text.mediumEmphasis'}>
            {GREETING}
          </Typography>
          <Typography
            variant="body2"
            color={'text.mediumEmphasis'}
            mt={2.5}
            mb={6}
            maxWidth={'782px'}
            style={{ lineHeight: '2.5vh' }}
          >
            {INTRO_TEXT}
          </Typography>

          <Box
            mt={2}
            mb={4}
            display={'flex'}
            flexDirection={'column'}
            gap={'1vh'}
          >
            <Typography
              variant="caption1"
              color={'text.highEmphasis'}
              paddingBottom={'0.5vh'}
            >
              {CHARGES_LABEL}
            </Typography>
            {charges.map((charge) => (
              <CheckboxLabels
                key={charge}
                label={charge}
                variant="caption2"
                labelColor="text.mediumEmphasis"
                checked={selectedCharge === charge}
                onChange={() => handleCheckboxChange(charge)}
              />
            ))}
          </Box>
          <Typography
            variant="body2"
            color={'text.mediumEmphasis'}
            maxWidth={'660px'}
            style={{ lineHeight: '2.5vh' }}
          >
            {DISPUTE_TEXT}
          </Typography>
          <Typography variant="body2" color={'text.mediumEmphasis'} mt={4}>
            {SIGN_OFF}
            <br />
            {SIGN_OFF_NAME}
          </Typography>
        </Box>
        <Divider sx={{ mt: 2 }} />
        <StyledStack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack direction={'row'} alignItems={'center'} gap={3}>
            <Typography variant="caption1" color={'text.highEmphasis'}>
              {AUTO_SEND_LABEL}
            </Typography>

            <StyledIconStack>
              <Typography variant="body1" color={'text.highEmphasis'} px={4}>
                {AUTO_SEND_DAYS}
              </Typography>
            </StyledIconStack>
            <Typography variant="body1" color={'text.mediumEmphasis'}>
              {AUTO_SEND_DAYS_LABEL}
            </Typography>
          </Stack>
          <ButtonComponent
            buttonText={BUTTON_TEXT}
            buttonVariant="contained"
            disabled={selectedCharge === null}
            onClick={onPreviewClick}
          ></ButtonComponent>
        </StyledStack>
      </Box>
    </Box>
  )
}

export default PreAdverseCard
