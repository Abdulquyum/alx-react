import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notification from './Notifications';

function App() {
  return (
    <>
      <Notification />
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="App-body">
          <Login />
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
