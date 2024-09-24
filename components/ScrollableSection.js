import { Scroll } from 'react-scroll';

function ScrollableSection() {
  return (
    <div>
      <Scroll to="section1" smooth duration={1000}>
        <button>Scroll to Section 1</button>
      </Scroll>
      <div id="section1" className="section">
        <h2>Section 1</h2>
      </div>
    </div>
  );
}

export default ScrollableSection;