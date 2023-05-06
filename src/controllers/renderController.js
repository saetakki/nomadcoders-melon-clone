import Song from "../models/Song";
import User from "../models/User";

export const renderPage = async (req, res, label, element) => {
  console.log(req.session);
  return res.render(element, { pageTitle: label });
};
