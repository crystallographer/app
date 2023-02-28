import { ThemeProvider } from "react-bootstrap";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import { store } from "../../redux/store";
import { router } from "../../router/router";

const BREAKPOINTS = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"];
const MIN_BREAKPOINT = "xxs";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider
                breakpoints={BREAKPOINTS}
                minBreakpoint={MIN_BREAKPOINT}
            >
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
