import store from '../../store'
import { SpinnerNames } from '../../reducers/globalEvents.reducers'
import { pendingTask, begin, end } from 'react-redux-spinner'

export const startSpinner = () => {
  if (store) {
    store.dispatch({
      type: SpinnerNames.SPINNER_START,
      [pendingTask]: begin,
    })
  }
}

export const endSpinner = () => {
  if (store) {
    store.dispatch({
      type: SpinnerNames.SPINNER_END,
      [pendingTask]: end,
    })
  }
}
