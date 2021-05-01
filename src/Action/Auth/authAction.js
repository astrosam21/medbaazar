import {STORE_ACCOUNT_ID} from "./actionTypes"


export const storeAccountId=(data)=>{
     return {
       type: STORE_ACCOUNT_ID,
       payload: data
     };

}