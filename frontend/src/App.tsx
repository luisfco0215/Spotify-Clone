import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/ChatPage"

function App() {
  return (
    <>
      <header>
        <Routes>
          <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback
            signInForceRedirectUrl={"/auth-callback"} />} />
          <Route path="/auth-callback" element={<AuthCallbackPage />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Route>
        </Routes>
      </header>
    </>
  )
}

export default App
