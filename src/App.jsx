// ..... React modules
import { BrowserRouter } from "react-router-dom";

// ..... Components
import Layout from "./layouts/Layout";
import Routing from "./routing/Routing";

// ..... Assets

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        {/* Inject Pages here */}
        <Routing />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
