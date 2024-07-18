
import { AppState } from "./Appstate";
import {Actions} from "./actions";


const initialAppState = {
    today: new Date()
}

export const rootReducer = (
    prevState: AppState = initialAppState,
    action: Actions
) => {
    switch (action.type) {
        case 'setToday' : {
            return { ...State, today: action.today}
        }
    }
}