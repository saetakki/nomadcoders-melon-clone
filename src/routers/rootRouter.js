import express from "express";
import { renderPage } from "../controllers/renderController";

const rootRouter = express.Router();
const routerData = [
  {
    path: "/",
    label: "Home",
    element: "home",
  },
  {
    path: "/test",
    label: "Test",
    element: "test",
  },
  {
    path: "/user",
    label: "User Info",
    element: "userInfo",
  },
];

routerData.map((router) => {
  rootRouter.get(router.path, (res, req) => {
    renderPage(res, req, router.label, router.element);
  });
});

export default rootRouter;
