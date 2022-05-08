<?php

namespace App\Http\Controllers;

use App\AppConfigs;
use App\Models\Beneficiario;
use App\Models\Plano;
use App\Models\Preco;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BeneficiariosController extends Controller
{
    //
    protected int $status = AppConfigs::HTTP_STATUS_BAD_REQUEST;

    /**
     * Método controlador para requisições para um novo  beneficiário
     *
     * @param Request $request
     * @return void
     */
    public function novoBeneficario(Request $request)
    {
        $resposta = array();
        $Plano = new Plano();
        $Preco = new Preco();

        try {
            $planoEhValido = $Plano->planoEhValido($request->plano);
            if (!$planoEhValido) {
                $resposta = array(
                    "mensagem" =>  AppConfigs::PLANO_INVALIDO,
                    "dados" => array(),
                );
            } else {
                $Beneficiario = new Beneficiario(
                    $request->nome,
                    $request->idade,
                    $request->beneficiarios,
                );
                $precoPlano = $Preco->precoPorFaixaDeIdade($Beneficiario->idade);
                $plano = $Plano->listarPorId($request->plano);
                $valorDoPlano =  $precoPlano * $Beneficiario->beneficiarios;
                $novaProposta = $Beneficiario->cadastrar($valorDoPlano, $plano);
                $resposta = array(
                    "mensagem" => AppConfigs::SUCESSO_AO_CADASTRAR,
                    "dados" => $novaProposta
                );
                $this->status = AppConfigs::HTTP_STATUS_CREATED;
            }
        } catch (\Throwable $th) {
            $resposta = array(
                "mensagem" => AppConfigs::FALHA_AO_CADASTRAR,
                "erro" => $th->getMessage()
            );
        }

        return (new Response($resposta, $this->status));
    }

    /**
     * Método controlador para listar todos beneficiários
     *
     * @return void
     */
    public function listarTodos()
    {
        $resposta = array();
        try {
            $Beneficiarios = Beneficiario::listarTodos();
            $resposta = array(
                "mensagem" => AppConfigs::SUCESSO_AO_PESQUISAR,
                "dados" => $Beneficiarios
            );
            $this->status = AppConfigs::HTTP_STATUS_OK;
        } catch (\Throwable $th) {
            $resposta = array(
                "mensagem" => AppConfigs::FALHA_AO_PESQUISAR,
                "erro" => $th->getMessage()
            );
        }

        return (new Response($resposta, $this->status));
    }
}
