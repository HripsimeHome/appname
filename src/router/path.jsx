import { ReactElement } from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RegistrationPage from "../pages/RegistrationPage";
import CategoriesPage from "../pages/CategoriesPage";
import SinglePage from "../pages/SinglePage";
import SearchPage from "../pages/SearchPage";

import ErrorPage from "../pages/ErrorPage";
import { Navigate } from "react-router-dom";

// Paths

export const homePagePath = "/";
export const aboutPagePath = "/about";
export const registrationPagePath = "registration";
export const categoriesPagePath = "categories";
export const singlePagePath = "single";
export const searchPagePath = "search";

// Routes

export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },

  {
    path: aboutPagePath,
    component: <AboutPage />,
  },

  {
    path: registrationPagePath,
    component: <RegistrationPage />,
  },

  {
    path: categoriesPagePath,
    component: <CategoriesPage />,
  },

  {
    path: singlePagePath,
    component: <SinglePage />,
  },

  {
    path: searchPagePath,
    component: <SearchPage />,
  },

  {
    path: "*",
    component: <ErrorPage />,
  },
];
