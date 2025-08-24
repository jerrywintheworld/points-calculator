import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SteamCalculator from './pages/SteamCalculator'
import PlayStationCalculator from './pages/PlayStationCalculator'
import XboxCalculator from './pages/XboxCalculator'
import NintendoCalculator from './pages/NintendoCalculator'
import EpicCalculator from './pages/EpicCalculator'
import GamingPage from './pages/GamingPage'
import DeltaCalculator from './pages/DeltaCalculator'
import AmericanCalculator from './pages/AmericanCalculator'
import UnitedCalculator from './pages/UnitedCalculator'
import BritishCalculator from './pages/BritishCalculator'
import LufthansaCalculator from './pages/LufthansaCalculator'
import AirlinesPage from './pages/AirlinesPage'
import MarriottCalculator from './pages/MarriottCalculator'
import HiltonCalculator from './pages/HiltonCalculator'
import IHGCalculator from './pages/IHGCalculator'
import HyattCalculator from './pages/HyattCalculator'
import ChoiceCalculator from './pages/ChoiceCalculator'
import HotelsPage from './pages/HotelsPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gaming" element={<GamingPage />} />
        <Route path="/gaming/steam" element={<SteamCalculator />} />
        <Route path="/gaming/playstation" element={<PlayStationCalculator />} />
        <Route path="/gaming/xbox" element={<XboxCalculator />} />
        <Route path="/gaming/nintendo" element={<NintendoCalculator />} />
        <Route path="/gaming/epic" element={<EpicCalculator />} />
        <Route path="/airlines" element={<AirlinesPage />} />
        <Route path="/airlines/delta" element={<DeltaCalculator />} />
        <Route path="/airlines/american" element={<AmericanCalculator />} />
        <Route path="/airlines/united" element={<UnitedCalculator />} />
        <Route path="/airlines/british" element={<BritishCalculator />} />
        <Route path="/airlines/lufthansa" element={<LufthansaCalculator />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/marriott" element={<MarriottCalculator />} />
        <Route path="/hotels/hilton" element={<HiltonCalculator />} />
        <Route path="/hotels/ihg" element={<IHGCalculator />} />
        <Route path="/hotels/hyatt" element={<HyattCalculator />} />
        <Route path="/hotels/choice" element={<ChoiceCalculator />} />
      </Routes>
    </Layout>
  )
}

export default App
