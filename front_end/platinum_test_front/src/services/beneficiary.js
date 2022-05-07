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
    console.error(error);
    if (showAlert) sendAlert(0, error.response.data.mensagem);
  }
}
