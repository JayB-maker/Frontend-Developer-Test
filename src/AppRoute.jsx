import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, SignUpPage } from './pages'


const AppRoute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/'>
                <Route index element = {<HomePage />} />
                <Route path='login' element = {<LoginPage />} />
                <Route path='signup' element = {<SignUpPage />} />
            </Route>
        </Routes>
    </Router>
    </>
    
  )
}

export default AppRoute