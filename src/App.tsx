import Arrow32 from './components/icon/32px/Arrow32';
import Cart32 from './components/icon/32px/Cart32';
import Favorite32 from './components/icon/32px/Favorite32';
import Like32 from './components/icon/32px/Like32';
import User32 from './components/icon/32px/User32';

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-green-200 gap-2">
      <Arrow32 />
      <Cart32 />
      <Favorite32 />
      <Like32 />
      <User32 />
    </div>
  );
}

export default App;
