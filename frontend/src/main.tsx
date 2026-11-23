import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header/Header";
import Form from "./Orders/Form/Form";
import List from "./Orders/List/List";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col bg">
      <Header />
      <main className="flex-1 w-full max-w-md mx-auto px-5 py-6">
        <Form />
        <List />
      </main>
    </div>
  </StrictMode>,
);
