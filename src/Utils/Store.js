import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import sidePanelReducer from './sidePanelSlice'
import suggestionSlice from './suggestionSlice'
import replySlice from './replySlice'
import liveChatSlice from './liveChatSlice'
import toggleLiveSlice from './toggleLiveSlice'
const store=configureStore({

    reducer:{
        sidePanel:sidePanelReducer,
        suggestions:suggestionSlice,
        showReplies:replySlice,
        liveChat:liveChatSlice,
        toggleLive:toggleLiveSlice,
    }
});

export default store;