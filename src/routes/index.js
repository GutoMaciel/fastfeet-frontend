import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import ListDeliveryman from '../pages/Deliverymans/List';
import EditDeliveryman from '../pages/Deliverymans/Edit';
import NewDeliveryman from '../pages/Deliverymans/New';

import ListPack from '../pages/Packs/List';
import EditPack from '../pages/Packs/Edit';
import PackDetails from '../pages/Packs/More';
import NewPack from '../pages/Packs/New';

import ListProblem from '../pages/Problems/List';
import ProblemDetails from '../pages/Problems/More';

import EditRecipient from '../pages/Recipients/Edit';
import ListRecipient from '../pages/Recipients/List';
import NewRecipient from '../pages/Recipients/New';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliverymans" component={ListDeliveryman} isPravite />
      <Route path="/deliverymans/:id" component={EditDeliveryman} isPravite />
      <Route path="/deliverymans/new" component={NewDeliveryman} isPravite />

      <Route path="/packs" component={ListPack} isPravite />
      <Route path="/packs/:id" component={EditPack} isPravite />
      <Route path="/packs/details/:id" component={PackDetails} isPravite />
      <Route path="/packs/new" component={NewPack} isPravite />

      <Route path="/problems" component={ListProblem} isPravite />
      <Route
        path="/problems/details/:id"
        component={ProblemDetails}
        isPravite
      />

      <Route path="/recipients/:id" component={EditRecipient} isPravite />
      <Route path="/recipients" component={ListRecipient} isPravite />
      <Route path="/recipients/new" component={NewRecipient} isPravite />
    </Switch>
  );
}
