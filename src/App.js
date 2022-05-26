import './App.css';
import InputComponent from './components/InputComponent';
import ListComponent from './components/ListComponent';

function App() {
  
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-6">
          <InputComponent></InputComponent>
          </div>
          <div className="col-6">
          <ListComponent></ListComponent>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
