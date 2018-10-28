import axios from 'axios';
import { getProjectsData } from '../server/db';
import { isClient } from '../config/app';

export default async (location, db) => {
  const path = location.trim().match(/\/?(.*)/)[1].split('/');
  let data;
  switch (path[0]) {
  case 'portfolio':
  {
    data = {};
    if (path.length >= 2) {
      switch (path[1]) {
      case 'freecodecamp':
      {
        if (path.length === 3) {
          const keyword = path[2];
          try {
            if (isClient) {
              const response = await axios.get('/projectsData', { params: { keyword } });
              data.projects = response.data.projects;
            } else {
              data.projects = await getProjectsData(db, keyword);
            }
          } catch (e) {
            data.projects = [];
          }
        }
        break;
      }
      default:
      }
    }
    break;
  }
  default:
  }
  return data;
};
