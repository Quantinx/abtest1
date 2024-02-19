import ab from "./helpers/AB";
import MainContent from "./components/MainContent";
import SecondaryContent from "./components/SecondaryContent";
import SecondaryContentExp from "./components/SecondaryContentExp";
import { useState } from "react";
import NewsletterForm from "./components/NewsletterForm";
function App() {
  const [version, setVersion] = useState(ab());
  console.log(version);
  return (
    <>
      <MainContent />
      {version ? <SecondaryContentExp /> : <SecondaryContent />}
      <NewsletterForm version={version} />
    </>
  );
}

export default App;
