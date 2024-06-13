import {RECORD} from '../action'

export const record = (data)=>{
    console.log(data)
    return{
        type:RECORD,
        payload:data
    }
}