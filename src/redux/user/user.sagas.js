import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types'

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.util';
import { signInSuccess, signInFailure } from './user.actions';

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider); // we don't use signInWithGoogle function in firebase.util because want want to access the value when it succeeds
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error));
    }
};
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}