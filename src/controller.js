import { state } from "./index.js";
import { render } from "./models/render.js";


export function dispatch(action) {
    console.log("dispatch fired");
    switch (action.type) {
        case "open-project-form":
            state.view = "open-project-form";
            break;
        case "cancel-form":
            state.view = "home";
            break;
    };

    render(state);
};