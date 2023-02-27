import { ThemeProvider } from "react-bootstrap";

import { Header } from "../Header/Header";

const BREAKPOINTS = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"];
const MIN_BREAKPOINT = "xxs";

function App() {
    return (
        <ThemeProvider breakpoints={BREAKPOINTS} minBreakpoint={MIN_BREAKPOINT}>
            <Header />
        </ThemeProvider>
    );
}

export default App;
