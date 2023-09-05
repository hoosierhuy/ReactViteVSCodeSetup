import { createRoot } from 'react-dom/client';
import Confetti from './components/Confetti';

const App = () => {
  return (
    <div>
      <Confetti />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
