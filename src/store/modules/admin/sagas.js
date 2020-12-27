import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '~/services/api';
import { updateProfileSuccess, updateProfilefailure, deleteProfile } from './actions';
import { signOut } from '../auth/actions'

export function* updateProfile({ payload }) {
  try {
   
    const  id  = payload.data[1];
    const { name, email, ...rest } = payload.data[0];
    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, `admins/${id}`, profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar Perfil');
    yield put(updateProfilefailure());
  }
}

export function* profileDelete({ payload }) {
  try {
    
    const  id  = payload.id;
   
    yield call(api.delete, `admins/${id}`);
  
    toast.success('Perfil deletado com sucesso!');

    yield put(signOut());
    
  } catch (error) {
    toast.error('Erro ao deletar Perfil');
    
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/DELETE_PROFILE', profileDelete)
  ]);