import { createRoot } from 'react-dom/client'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/700.css'
import '@fontsource/karla/300.css'
import '@fontsource/karla/400.css'
import '@fontsource/karla/500.css'
import '@fontsource/karla/600.css'
import '@fontsource/karla/700.css'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
