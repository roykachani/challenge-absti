import { MainProvider } from './context/main';
import AppRouter from './routes/appRouter';

function App() {
  return (
    <>
      <MainProvider>
        <AppRouter />
      </MainProvider>
    </>
  );
}

export default App;
