import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import theme from './style/theme';
import GlobalStyle from "./style/GlobalStyle";
import Home from "./pages/Home";
import Finance from "./pages/Finance";

function App() {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="finance" element={<Finance />}>
              <Route path="smallbizLoan" element={<Finance />} />
              <Route path="smallbizCard" element={<Finance />} />
              <Route path="stealthBankbook" element={<Finance />} />
            </Route>
            

            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </Router>
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
