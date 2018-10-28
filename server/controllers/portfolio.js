import { connectDb, getProjectsData as getData } from '../db';

export default async function getProjectsData(req, res) {
  const { keyword } = req.query;
  if (keyword == null || keyword.trim() === '') {
    return res.sendStatus(400);
  }
  const db = connectDb();
  let projects;
  try {
    projects = await getData(db, keyword);
  } catch (e) {
    projects = [];
  }
  return res.json({ projects });
}