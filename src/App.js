import Topbar from './components/topbar/Topbar';
import './app.css';
import Featured from './components/featured/Featured';
import AppFooter from './components/footer/Footer';
import Footer from './components/copyright/Footer';
import Offer from './components/offer/Offer';
import Security from './components/security/Security';
import Features from './components/features/Features';
import Calculator from './components/calculator/Calculator';

function App() {
    return (
        <div className="App">
            <Topbar />
            <Featured />
            <Offer />
            <Calculator />
            <Security />
            <Features />
            <AppFooter />
            <Footer />
        </div>
    );
}

export default App;
