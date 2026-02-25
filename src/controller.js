import { state } from "./index.js";
import { render } from "./models/render.js";


export function dispatch(action) {
    switch (action.type) {
        case "open-project-form":
            state.view = "open-project-form";
            break;
    };

    render(state);
};