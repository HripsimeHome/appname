import { ReactElement } from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import AudiencePage from "../pages/AudiencePage";
import RegistrationPage from "../pages/RegistrationPage";
import CategoriesPage from "../pages/CategoriesPage";
import SearchPage from "../pages/SearchPage";
import SinglePage from "../pages/SinglePage";
import NotificationPage from "../pages/NotificationPage";

import ErrorPage from "../pages/ErrorPage";
import { Navigate } from "react-router-dom";

// Paths

export const homePagePath = "/";
export const aboutPagePath = "/about";
export const audiencePagePath = "/audience";
export const registrationPagePath = "/registration";
export const categoriesPagePath = "/categories";
export const searchPagePath = "/search";
export const notificationPagePath = "/notification";

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
    path: audiencePagePath,
    component: <AudiencePage />,
  },

  {
    path: registrationPagePath,
    component: <RegistrationPage />,
  },

  {
    path: categoriesPagePath,
    component: <CategoriesPage />,
    children: [
      {
        path: `:id`,
        component: <SinglePage />,
      },
    ],
  },

  {
    path: searchPagePath,
    component: <SearchPage />,
  },

  {
    path: notificationPagePath,
    component: <NotificationPage />,
  },

  {
    path: "*",
    component: <ErrorPage />,
  },
];
