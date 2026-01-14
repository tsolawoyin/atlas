import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./Router/router.jsx";

import "bulma/css/bulma.css";
import "../css/index.css";

import "../assets/fonts/Poppins/Poppins-Regular.ttf";
import "../assets/fonts/Caveat/Caveat-VariableFont_wght.ttf";
import "../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import "../assets/fonts/Bungee_Tint/BungeeTint-Regular.ttf";
import "../assets/fonts/Protest_Guerrilla/ProtestGuerrilla-Regular.ttf";
import "../assets/fonts/Anton/Anton-Regular.ttf";

// // Unregister any old service workers
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.getRegistrations().then((registrations) => {
//     registrations.forEach((registration) => {
//       registration.unregister();
//     });
//   });

//   // Clear all caches
//   caches.keys().then((cacheNames) => {
//     cacheNames.forEach((cacheName) => {
//       caches.delete(cacheName);
//     });
//   });
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
