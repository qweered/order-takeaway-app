import { createLazyFileRoute } from "@tanstack/react-router";
import { Description } from "../components/Description.jsx";

export const Route = createLazyFileRoute("/menu")({
  component: Menu,
});

function Menu() {
  return <Description />;
}
