export const display = document.getElementById("display");
export const buttons = document.querySelectorAll(".btn");

export const state = {
    current: "",
    previous: null,
    operator: null,
    justCalculated: false,
    isOn: false,
};