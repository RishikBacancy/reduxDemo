export const HOME_TAB = 'HOME_TAB';
export const CHAT_TAB = 'CHAT_TAB';
export const FIND_TAB = 'FIND_TAB';
export const SETTING_TAB = 'SETTING_TAB';

export const getHomeCount = (countData) => {
    return{
        type: HOME_TAB,
        payload: countData
    }
}

export const getChatCount = (countData) => {
    return{
        type: CHAT_TAB,
        payload: countData
    }
}

export const getFindCount = (countData) => {
    return{
        type: FIND_TAB,
        payload: countData
    }
}

export const getSettingCount = (countData) => {
    return{
        type: SETTING_TAB,
        payload: countData
    }
}