import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import StaticRouter from 'react-router-dom/server'

test("Logo Should load on rendering Header", () => {
  const header = render(
    <StaticRouter>
        <Provider store={Store}>
      <Header />
    </Provider>
    </StaticRouter>
  );
  console.log(header);
});

/* Instruction should follow For testing a Component
1.Load Header Component 
2.Check if the Logo is loaded or not



*/
