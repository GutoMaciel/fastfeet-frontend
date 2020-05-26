import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

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

      <Route path="/deliverymans" component={ListDeliveryman} isPrivate />
      <Route path="/deliveryman/edit/:id" component={EditDeliveryman} isPrivate />
      <Route path="/deliveryman/new" component={NewDeliveryman} isPrivate />

      <Route path="/packs" component={ListPack} isPrivate />
      <Route path="/pack/:id" component={EditPack} isPrivate />
      <Route path="/packs/details/:id" component={PackDetails} isPrivate />
      <Route path="/pack/new" component={NewPack} isPrivate />

      <Route path="/problems" component={ListProblem} isPrivate />
      <Route
        path="/problems/details/:id"
        component={ProblemDetails}
        isPrivate
      />

      <Route path="/recipient/edit/:id" component={EditRecipient} isPrivate />
      <Route path="/recipients" component={ListRecipient} isPrivate />
      <Route path="/recipient/new" component={NewRecipient} isPrivate />
    </Switch>
  );
}
