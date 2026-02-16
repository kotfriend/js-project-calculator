import { display, state } from "./dom.js";
import { reset } from "./function.js";        

export function powerOn() {
    state.isOn = true;
    reset();
    display.value = "0";
}

export function powerOff() {
    state.isOn = false;
    display.value = "";
}

export function press(n) {
    if (!state.isOn) return;

    if (state.justCalculated) {
        state.previous = null;
        display.value = '0';
        state.justCalculated = false;
    }

    if (state.current == '0' || state.current == '00') {
        state.current = n;
        display.value = state.current;
    } else {
        state.current += n;
        display.value = state.current;
    }
}