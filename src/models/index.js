import { embedModelCollection } from 'taro-fast-framework/es/models';

import article from './article';
import entrance from './entrance';
import global from './global';
import news from './news';
import session from './session';
import simulation from './simulation';

export default embedModelCollection(
  global,
  session,
  entrance,
  simulation,
  news,
  article,
);
