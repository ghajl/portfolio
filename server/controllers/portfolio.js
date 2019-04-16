import { connectDb, getProjectsData as getData } from '../db';
import { isDebug } from '../../config/app';

let config = null;
if (isDebug) {
  config = require('../config').default;
}

export default async function getProjectsData(req, res) {
  const { keyword } = req.query;

  if (keyword == null || keyword.trim() === '') {
    return res.sendStatus(400);
  }

  const db = connectDb(config);
  let projects;
  try {
    projects = await getData(db, keyword);
  } catch (e) {
    projects = [];
  }
  return res.json({ projects });
}
