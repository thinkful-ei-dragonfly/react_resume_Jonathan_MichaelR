'use strict';

function App(props){
  return (
<div>
<header role="">
  <h1>Sally Student</h1>
  <p>Sally Student</p>
  <p>sally@student.edu</p>
  <p>555-555-5555</p>
</header>
<section>
  <h2>Education</h2>
    <ul>
      <li>San Diego State University</li>
      <li>Tufts University</li>
    </ul>
  </section>
  <section>
    <h2>Employment History</h2>
    <ul>
      <li>Kramerica Industries</li>
      <li>Sacred Heart Hospital</li>
      </ul>
      </section>
  </div>
  );  
}

ReactDOM.render(<App />, document.querySelector('#app-root'));