import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage";
import EditorPage from "./pages/editorpage";
import "./styles/index.scss";
// import Error from "./pages/error";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/editor/:roomId" element={<EditorPage />} />
            {/* <Routes path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
    );
}

export default App;
