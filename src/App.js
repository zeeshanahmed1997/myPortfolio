import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm [Your Name], a passionate software developer with expertise in web and mobile applications. Explore my work and get in touch!
        </p>
        <section className="Skills">
          <h2>Skills</h2>
          <ul>
            <li>ASP.NET Development</li>
            <li>MAUI & Xamarin.Forms</li>
            <li>React & Redux</li>
            <li>SQL & Database Management</li>
            <li>Machine Learning & AI</li>
          </ul>
        </section>
        <section className="Projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a
                href="https://link-to-your-project1.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project 1
              </a>
            </li>
            <li>
              <a
                href="https://link-to-your-project2.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project 2
              </a>
            </li>
            <li>
              <a
                href="https://link-to-your-project3.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project 3
              </a>
            </li>
          </ul>
        </section>
        <section className="Contact">
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me at{' '}
            <a href="mailto:your-email@example.com">your-email@example.com</a>
          </p>
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

