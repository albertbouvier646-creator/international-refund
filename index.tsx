// Avant
import Home from './Home';
import Layout from './Layout';
import TermsAndConditions from './components/legal/TermsAndConditions';
import PrivacyPolicy from './components/legal/PrivacyPolicy';

// Après (Utiliser React.lazy pour les pages moins sollicitées)
import Home from './Home'; // Garder Home pour le chargement initial rapide
import Layout from './Layout';

// Pages légales chargées paresseusement
const TermsAndConditions = React.lazy(() => import('./components/legal/TermsAndConditions'));
const PrivacyPolicy = React.lazy(() => import('./components/legal/PrivacyPolicy'));

const App = () => {
  // ...
  const renderPage = () => {
    switch (currentPage) {
      case 'terms':
        return <TermsAndConditions />; // Fonctionne avec React.lazy
      case 'privacy':
        return <PrivacyPolicy />; // Fonctionne avec React.lazy
      default:
        return <Home />;
    }
  };

  // ...
  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {/* Utiliser Suspense pour afficher un fallback pendant le chargement paresseux */}
      <React.Suspense fallback={<div>Loading Page...</div>}>
        {renderPage()}
      </React.Suspense>
    </Layout>
  );
};