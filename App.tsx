
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StudiesPage from './pages/StudiesPage';
import BookStudyPage from './pages/BookStudyPage';
import OtherStudiesPage from './pages/OtherStudiesPage';
import LicoesDosLivrosPage from './pages/LicoesDosLivrosPage';
import DestaquesPage from './pages/DestaquesPage';
import LessonViewerPage from './pages/LessonViewerPage';
import ArticleViewerPage from './pages/ArticleViewerPage';
import QuizzesPage from './pages/QuizzesPage';
import ScrollToTop from './components/ScrollToTop';
import ShelfPage from './pages/ShelfPage';
import BookViewerPage from './pages/BookViewerPage';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/estudos" element={<StudiesPage />} />
          <Route path="/estudos/:bookId" element={<BookStudyPage />} />
          <Route path="/outros-estudos" element={<OtherStudiesPage />} />
          <Route path="/outros-estudos/:articleId" element={<ArticleViewerPage />} />
          <Route path="/licoes-dos-livros" element={<LicoesDosLivrosPage />} />
          <Route path="/licoes-dos-livros/:bookId" element={<LessonViewerPage />} />
          <Route path="/destaques" element={<DestaquesPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />          
          <Route path="/estante" element={<ShelfPage />} />
          <Route path="/estante/:bookId" element={<BookViewerPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
