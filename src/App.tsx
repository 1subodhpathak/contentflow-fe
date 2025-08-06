import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import LandingPage from "./app/LandingPage"
import AuthPage from "./app/auth/AuthPage"
import { ThemeProvider } from "./components/theme-provider"
import DashboardPage from "./app/dashboard/DashboardPage"
import CreateContentPage from "./app/create/CreatePage"
import AnalyticsPage from "./app/analytics/AnalyticsPage"
import LibraryPage from "./app/library/LibraryPage"
import CaptionGeneratorPage from "./app/ai/CaptionGeneratorPage"
import FormatConverterPage from "./app/ai/FormatConverterPage"
import HashtagOptimizerPage from "./app/ai/HashtagOptimizerPage"
import PerformancePredictorPage from "./app/ai/PerformancePredictorPage"
import SubtitleGeneratorPage from "./app/ai/SubtitleGeneratorPage"

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage /> } />
          <Route path="/create" element={<CreateContentPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/ai/captions" element={<CaptionGeneratorPage />} />
          <Route path="/ai/hashtags" element={<HashtagOptimizerPage />} />
          <Route path="/ai/formats" element={<FormatConverterPage />} />
          <Route path="/ai/performance" element={<PerformancePredictorPage />} />
          <Route path="/ai/subtitles" element={<SubtitleGeneratorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
