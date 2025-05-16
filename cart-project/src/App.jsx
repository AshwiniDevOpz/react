import './App.css'; // Import CSS for styling
import Carts from './Component/State/Carts'; // Import Carts component
import Useref from './Component/State/Useref'; // Import Useref component
import Useeffect from './Component/State/Useeffect'; // Import Useeffect component

function App() {
  return (
    <div>
      <Carts /> {/* Uncomment to use */}
      <Useeffect /> {/* Uncomment to use */}
      <Useref /> {/* This component is already being used */}
    </div>
  );
}

export default App;
