import {STORE_ACCOUNT_ID} from "../../Action/Auth/actionTypes";

const INITIAL_STATE={
    auth:{
        account:{
            accountId:"BABA_YAGA"
        }
    }
}
export default function authReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case STORE_ACCOUNT_ID:
            return state={
                ...state.auth.account.accountId,
                accountId:action.payload
            }
        default:
            return state
    }
}
