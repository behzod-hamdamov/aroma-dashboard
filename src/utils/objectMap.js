import dayjs from "dayjs"

import { tableItemEnums } from "@enums"

const filters = {
  phone_number: (value) => {
    const example = "xx xxx xx xx"
    let i = 0
    return example.replace(/x/g, () => value[i++])
  },
  updated_at: (value) => dayjs(value).format('DD.MM.YYYY HH:mm:ss'),
  created_at: (value) => dayjs(value).format('DD.MM.YYYY HH:mm:ss'),
}

export const objectMap = (obj, callback) => {
  const objectArr = Object.entries(obj)
  const arr = []

  for (let i = 0; i < objectArr.length; i++) {
    const key = objectArr[i][0]
    const value = objectArr[i][1]
    const element = callback([
      tableItemEnums[key],
      filters[key] ? filters[key](value) : value
    ], i, objectArr)

    arr.push(element)
  }

  return arr
}