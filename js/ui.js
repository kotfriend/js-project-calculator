import { oper, equel, reset, del } from "./function.js";
import { powerOff, powerOn, press } from "./power.js";

export function handleClick(dataset) {
    const {action, value} = dataset;

    if (action === "powerOn") powerOn();
    else if (action === "powerOff") powerOff();
    else if (action === "number") press(value);
    else if (action === "operator") oper(value);
    else if (action === "equel") equel();
    else if (action === "reset") reset();
    else if (action === "del") del();
}