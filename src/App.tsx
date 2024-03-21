import { Routes, Route } from "react-router-dom";
import HomeContainer from "./components/home/HomeContainer";
import LoaderPage from "./components/LoaderPage";
import Auth from "./components/auth";
import Info from "./components/info/info";
import { QueryClient, QueryClientProvider } from "react-query";
import SettingPage from "./components/setingPage/SetingPage";
import ScanInfo from "./components/scanInfo/ScanInfo";
import { ScanProvider } from "./components/scanInfo/scanContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/standBy" element={<SettingPage />} />
          <Route
            path="/scan"
            element={
              <ScanProvider>
                <ScanInfo />
              </ScanProvider>
            }
          />
          <Route path="/loading" element={<LoaderPage />} />
          <Route path="/info" element={<Info />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        {/* END: routes */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
