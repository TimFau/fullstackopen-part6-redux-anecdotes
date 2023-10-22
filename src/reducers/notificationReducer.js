import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            const notification = action.payload
            // console.log('notification', notification)
            return notification
        },
        resetNotification(state) {
            return ''
        }
    }
})

export const { setNotification, resetNotification } = notificationSlice.actions

export default notificationSlice.reducer

export const setNotificationWithTimeout = (notification, seconds) => (dispatch) => {
    dispatch(setNotification(notification))

    setTimeout(() => {
        dispatch(resetNotification())
    }, seconds * 1000)
}