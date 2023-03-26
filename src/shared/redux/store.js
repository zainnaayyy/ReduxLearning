import { configureStore } from "@reduxjs/toolkit"
import {UserData} from "./action"

export const Store = configureStore({
    reducer: {
        UserData
    },
})