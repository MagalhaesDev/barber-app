import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { CreateAccount } from './pages/CreateAccount'
import { LonginPanel } from './pages/LoginPanel'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<LonginPanel />} />
        <Route path="/account" element={<CreateAccount />} />
      </Route>
    </Routes>
  )
}
