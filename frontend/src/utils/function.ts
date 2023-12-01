export const formatDate = (date: string) => {
  const dateObj = new Date(date)
  const month = dateObj.getMonth() + 1
  const day = String(dateObj.getDate()).padStart(2, '0')
  const year = dateObj.getFullYear()
  const output = `${month}/${day}/${year}`
  return output
}
