import React, { useState } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import ContactModal from "./components/modal/ContactModal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Home openContact={() => setContactOpen(true)} />
      
      <ContactModal 
        open={contactOpen} 
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}

export default App;
