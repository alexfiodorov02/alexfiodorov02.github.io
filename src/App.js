import './App.css';
import alexImage from './assets/Alex2.jpg';

function App() {
  return (
    <div className="App">
      <div id="main">
        <div className="author">
          <a className="author__logo" href="https://alexf.pro/">
            <div>
              <img src={alexImage} alt="Alexander Fiodorov-Miller" width="100" />
            </div>
          </a>
          <div className="author__site-text">
            <a href="https://alexf.pro/" className="author__site-title">
              Alexander Fiodorov-Miller
            </a>
            <div className="author__elsewhere">
              <a href="https://linkedin.com/in/alexfiodorov02">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g transform="scale(1.2) translate(-1.5, -1.5)">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </g>
                </svg>
              </a>
              <a href="https://github.com/alexfiodorov02">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.87 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/>
                </svg>
              </a>
              <a href="https://alexf.pro/resume.pdf">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g transform="scale(0.55) translate(0, 2)">
                    <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5 C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304 c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709 c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855 L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <p>Hi there!</p>
        <p>
          My name is Alex. I build full-stack tools and think a lot about how design meets engineering. 
          I got into software when I was four (yes, really), and that early obsession never left. 
          At 17, I co-founded a CS education startup, which taught me a lot about inclusive tech, 
          fast-paced teamwork, and how to ship things that actually matter.
        </p>
        <p>
          Now, I'm excited to keep creating things that make people's lives a little easier—and make a difference.
        </p>
        <p>Here are some of the projects I've worked on:</p>
        
        <ul className="postlist">
          <li>
            <a href="https://github.com/memphis-iis/glyphwitch">Glyphwitch</a>
            <span className="postlist__date">Helps researchers annotate historical documents</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
