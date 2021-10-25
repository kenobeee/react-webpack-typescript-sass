import React from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css';
import {Layout} from "./shared/Layout/Layout"
import {Content} from "./shared/Content/Content";

function AppComponent() {
  return(

    <Layout>

      <Content/>

    </Layout>

  );
}

export const App = hot(AppComponent);