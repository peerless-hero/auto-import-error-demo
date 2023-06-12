declare interface Page<T> {
  code: number
  msg: string
  rows: T[]
  total: number
}