import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "./store";
import { Provider } from "react-redux";
import { WsHandler } from "./components/wsHandler.ts";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <WsHandler />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </>
);
