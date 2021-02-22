import { Suspense } from "react";
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';


const Welcome = () => {
  const { t, i18n } = useTranslation(['welcome']);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Idioma Actual: {i18n.language}
        </p>
        <p>
          {t('title', { name: "Yasniel" })}
        </p>
        <p dangerouslySetInnerHTML={{ __html: t('title', { name: "Yasniel" }) }} />
        <button onClick={() => { i18n.changeLanguage("es") }}>Español</button>
        <button onClick={() => { i18n.changeLanguage("en") }}>English</button>
      </header>
    </div>
  )
}


function App() {
  return (
    <Suspense fallback="Cargando Traducciones...">
      <Welcome />
    </Suspense>
  );
}

export default App;
