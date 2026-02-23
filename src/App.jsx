import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import RegisterBasic from "./pages/RegisterBasic";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import Applications from "./pages/Applications";
import StudentProfile from "./pages/StudentProfile";
import Navbar from "./components/Navbar";

// Layout component to conditionally render Navbar
function Layout({ children }) {
  const location = useLocation();
  // Hide navbar on login and register pages
  const hideNavbar = ["/", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterBasic />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/profile" element={<StudentProfile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
