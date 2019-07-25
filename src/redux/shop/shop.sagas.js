import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {

    try {
        const collectionRef = firestore.collection('collections');

        const snapshot = yield collectionRef.get(); // this comes in promise form

        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot) // call takes our function and then the params of that function

        // put is the equivalent of dispatch in Sagas.
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}