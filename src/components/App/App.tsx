import { ThemeProvider } from "react-bootstrap";
import { RouterProvider } from "react-router";

import { router } from "../../router/router";

const BREAKPOINTS = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"];
const MIN_BREAKPOINT = "xxs";

function App() {
    return (
        <ThemeProvider breakpoints={BREAKPOINTS} minBreakpoint={MIN_BREAKPOINT}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
