import NavigationList from '../components/Navigation/NavigationList';
import { ThemeProvider } from "styled-components";
import { AppWrapper } from '../state/store';
import Header from '../components/Head/Header'
import theme from '../globalStyles/theme';
import { GlobalStyles } from '../globalStyles/globalStyles';

function MovieNightApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppWrapper>
          <Header />
          <NavigationList />
          <Component {...pageProps} />
          </AppWrapper>
      </ThemeProvider>
    </>
  )
}

export default MovieNightApp
