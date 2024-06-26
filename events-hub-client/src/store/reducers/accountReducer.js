import initialState from "../initialState";
import { SET_ACCOUNT, SET_ACCOUNT_DATA, SET_ACCOUNT_TYPE, CLEAN_ACCOUNT } from "../actions/account";

export default function account(state = initialState.account, action) {
    console.log("account reducer");
    console.log(state);
    switch (action.type) {
        case SET_ACCOUNT:
            console.log(action.account);
            return setAccountToStorage(action.account);
        case SET_ACCOUNT_DATA:
            if (state === null) {
                state = {
                    data: action.data,
                    accountType: null
                }
            }
            else {
                state.data = action.data;
            }
            return setAccountToStorage(state);
        case SET_ACCOUNT_TYPE:
            if (state === null) {
                state = {
                    data: null,
                    accountType: action.accountType
                }
            }
            else {
                state.accountType = action.accountType;
            }
            return setAccountToStorage(state);
        case CLEAN_ACCOUNT:
            console.log("clean");
            return setAccountToStorage(null);

        default:
            return state;
    }
}

function setAccountToStorage(account) {
    localStorage.setItem("account", getStorageAccount(account));
    return account;
}

function getStorageAccount(account) {
    if (account != null){
        return JSON.stringify(account);
    }
    return null;
}