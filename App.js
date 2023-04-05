import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';

function App() {
  return (
    <div className="App">
      <Card interactive elevation={Elevation.TWO}>
        <h5><a href="https://blueprintjs.com/docs/" target="_blank" rel="noreferrer">Blueprint UI</a></h5>
        <p>This is a simple webpage based on Blueprint UI from React.</p>
        <Button>Click me</Button>
      </Card>
    </div>
  );
}

export default App;
