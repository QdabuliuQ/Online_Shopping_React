import React, { Suspense, useState, useEffect } from 'react'
import { useRoutes } from "react-router-dom";
import route from "route/index";
import Loading from "components/Loading/Loading";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.less";

export default function App() {
  const element = useRoutes(route)

  return (
    <div id='App'>
      <Suspense fallback={<Loading/>}>
        {element}
      </Suspense>
    </div>
  )
}
