
import NewStore from "pages/NewStore";
import React from "react";
import { Route, Routes } from "react-router-dom";


function RoutePages() {
  const RoutePage = [
    {
      path: "/",
      name: "NewStore",
      id: "NewStore",
      element: <NewStore />,
    }
  ];

  
  return (
    <div>
      <Routes>
        {RoutePage.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
       
      </Routes>
    </div>
  );
}

export default RoutePages;
