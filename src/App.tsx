import Appbar from "./components/appbar";
import MatchesList from "./components/matches-list.tsx/index.tsx";
import Providers from "./providers/index.tsx";

function App() {
  return (
    <Providers>
      <div className="m-auto px-4 pt-10 3xl:container">
        <Appbar />
        <div className="mt-10">
          <MatchesList />
        </div>
      </div>
    </Providers>
  );
}

export default App;
