import React from "react";
import { Redirect, Route } from "react-router-dom";

import Home from './pages/home/Home';
import Guide from './pages/rules/Guide';

const BaseRouter = (props: any) => (
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/game-rules" component={Guide} />
    </div>
);

export default BaseRouter;
