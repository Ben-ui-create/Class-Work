import { Users, Articles, Tags, Comments, ArticleTags } from './models/index.js';

;(async () => {
  console.log('Running Migration');

  const models = [Users, Articles, Tags, Comments, ArticleTags];

  for (const model of models) {
    try {
      console.log('model -> ' + model);

      await model.sync({alter: true});
    } catch (e) {
      console.error(e);
    }
  }

  console.log('Migration finished!');
})();