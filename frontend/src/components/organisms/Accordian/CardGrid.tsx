import Grid from '@mui/material/Grid'
import Card, { CardProps } from '@/components/molecules/Card'

const CardGrid = ({ cardData }: { cardData: CardProps[] }) => {
  return (
    <Grid container spacing={4} padding={2}>
      {cardData.map((data) => (
        <Grid item xs={12} sm={6} md={4} key={data.heading}>
          <Card {...data} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CardGrid
