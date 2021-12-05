import {
    NOTE_EDIT,
} from "./constant"


export const noteEdit = (editableNote) => ({
    type: NOTE_EDIT,
    payload: editableNote
})