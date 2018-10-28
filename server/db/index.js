import AwsDb from 'aws-sdk/clients/dynamodb';

export const connectDb = (config) => {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID || config.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || config.AWS_SECRET_ACCESS_KEY;
  const db = new AwsDb({
    apiVersion: '2012-10-08',
    region: 'eu-west-3',
    accessKeyId,
    secretAccessKey,
  });
  return db;
};

export const getProjectsData = (ddb, keyword) => new Promise((resolve, reject) => {
  let params = {
    TableName: 'Projects',
    IndexName: 'KeywordIndex',
    KeyConditionExpression: 'Keyword = :k',
    ExpressionAttributeValues: {
      ':k': { S: keyword },
    },
  };

  ddb.query(params, (err, data) => {
    if (err) reject(err);
    else {
      const dataList = data.Items.map(item => ({
        ProjectId: {
          S: item.ProjectId.S,
        },
        Keyword: {
          S: '0',
        },
      }));
      params = {
        RequestItems: {
          Projects: {
            Keys: dataList,
            ExpressionAttributeNames: {
              '#url': 'Url',
              '#image': 'Image',
              '#github': 'Github',
              '#title': 'Title',
              '#description': 'Description',
              '#tools': 'Tools',
            },
            ProjectionExpression: '#url,#image,#github,#title,#description,#tools',
          },
        },
      };
      ddb.batchGetItem(params, (err, data) => {
        if (err) reject(err);
        else {
          resolve(data.Responses.Projects);
        }
      });
    }
  });
});
