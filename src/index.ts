import { useEffect, useState } from "react";

function useBrowserLanguage() {
  const [language, setLanguage] = useState();

  useEffect(() => {
    import("detect-browser-language").then(
      ({ default: detectBrowserLanguage }) => {
        setLanguage(detectBrowserLanguage());
      },
    );
  }, []);

  return language;
}

export default useBrowserLanguage;
