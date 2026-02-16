import { display, state } from "./dom.js";        

        function calc(a, b, oper) {
            a = Number(a);
            b = Number(b);

            if (oper === '+') return a + b;
            if (oper === '-') return a - b;
            if (oper === '*') return a * b;
            if (oper === '/') return b ? a / b : 0;
        }

        export function oper(o) {
            if (!state.isOn) return;

            if (state.current === '') {
                state.operator = o;
                state.justCalculated = false;
                return;
            }
            if (state.previous !== null) {
                state.previous = calc(state.previous, state.current, state.operator);
            } else {
                state.previous = state.current;
            }
            state.operator = o;
            state.current = '';
            display.value = state.previous;
        }
        
        export function equel() {
            if (!state.isOn) return;

            if (state.current === '' || state.operator === null) return;
            state.previous = calc(state.previous, state.current, state.operator);
            display.value = state.previous;

            state.current = '';
            state.operator = null;
            state.justCalculated = true;
        }

        export function reset() {
            if (!state.isOn) return;

            state.current = '0';
            state.previous = null;
            state.operator = null;
            state.justCalculated = false;
            display.value = state.current;
        }

        export function del() {
            if (!state.isOn) return;
            if (state.current == '') return;

            if (String(state.current).length == 1) {
                state.current = '0';
                display.value = state.current;
            } else {
                state.current = String(state.current).slice(0,-1);
                display.value = state.current;
            }
        }