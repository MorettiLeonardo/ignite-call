export function getWeekDays() {
  const formater = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formater.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) =>
      weekDay.substring(0, 1).toLocaleUpperCase().concat(weekDay.substring(1)),
    )
}
