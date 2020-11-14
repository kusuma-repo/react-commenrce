import { all, call } from 'redux-saga/effects';

import { userSaga } from './user/User.saga';
import { cartSaga } from './cart/Cart.saga';
import { shopSaga } from './collections/Shop.saga';

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSaga), call(cartSaga)]);
}
