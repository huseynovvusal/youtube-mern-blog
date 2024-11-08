export const convertDate = (date) => {
  const newDate = new Date(date)

  const months = [
    "Janunaury",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const year = newDate.getFullYear()
  const month = months[newDate.getMonth()]
  const day = newDate.getDate()

  const hours = newDate.getHours()
  const minutes = newDate.getMinutes()

  return `${year} ${month} ${day} - ${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`
}
