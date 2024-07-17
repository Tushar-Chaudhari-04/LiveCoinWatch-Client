import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import { axiosClient } from '../../utils/AxiosClient.js'

export const getCryptoData=createAsyncThunk("cryptoSearch",async(body)=>{
    try {
        const cryptoResponse=await axiosClient.post(`/cryptoSearch?${searchParams}`);
        return cryptoResponse?.data?.result;
    } catch (err) {
        console.log("Error in getting crypto Slice data",err)
        Promise.reject(err);
    }
})

const cryptoSlice=createSlice({
    name:'cryptoSlice',
    initialState:{
        cryptoData:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(getCryptoData.fulfilled,(state,action)=>{
            state.cryptoData=action.payload;
        })
    }
})

export default cryptoSlice.reducer;