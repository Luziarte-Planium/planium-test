import sendAlert from '../utils/sendAlert';
import api from './api';

/**
 *
 * @param {*} showAlert
 * @returns
 */
export async function listAllBeneficiarys({ showAlert }) {
  try {
    const {
      data: { mensagem, dados },
    } = await api.get('/beneficiario/');
    if (showAlert) sendAlert(1, mensagem);
    return dados;
  } catch (error) {
    if (showAlert) sendAlert(0, error.response.data.mensagem);
  }
}

/**
 *
 * @param {*} param0
 * @returns {boolean}
 */
export async function newBeneficiary({ beneficiary, showAlert }) {
  try {
    const {
      data: { mensagem },
    } = await api.post('/beneficiario/', beneficiary);
    if (showAlert) sendAlert(1, mensagem);
    return true;
  } catch (error) {
    if (showAlert) sendAlert(0, error.response.data.mensagem);
    return false;
  }
}
