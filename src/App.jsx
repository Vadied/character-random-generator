import { StateProvider } from "./contexts/stateContext";
import Page from "./components/page";

const App = () => {
  return (
    <StateProvider>
      <Page />
    </StateProvider>
  );
};

export default App;
