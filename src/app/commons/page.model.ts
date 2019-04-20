export interface Page <T>{
    content:T[]
    totalPages:number
    totalElements:number
    last:boolean
    first:boolean
}