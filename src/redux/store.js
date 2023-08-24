import {configureStore} from '@reduxjs/toolkit'
import appConfigReducer from './slices/appConfigureSlice'
import postsReducer from './slices/postsSlice'

export default configureStore({
    reducer:{
        appConfigReducer,
        postsReducer
    }
})