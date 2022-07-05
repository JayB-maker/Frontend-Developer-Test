import { HomePage } from "./pages"
import LoginPage from "./pages/LoginPage";
import SignUpPages from "./pages/SignUpPages";

const App = () => {

  let Component;

  switch(window.location.pathname){
    case "/":
    Component = <HomePage />
    break
    case "/login":
    Component = <LoginPage />
    break
    case "/signup":
    Component = <SignUpPages />
    break

  }
  return (
    <>
        {Component}
    </>
  )
}

export default App