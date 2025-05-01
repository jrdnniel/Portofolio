import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Portofolio [Nama Kamu] - Futuristik</title>
        <meta name="description" content="Portofolio web developer dengan desain futuristik." />
        <meta name="keywords" content="web developer, portfolio, react, futuristik" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;