import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"

function App() {
  return (
    <>
      <header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback
            signInForceRedirectUrl={"/auth-callback"} />} />
          <Route path="/auth-callback" element={<AuthCallbackPage />} />
        </Routes>
      </header>
    </>
  )
}

export default App
