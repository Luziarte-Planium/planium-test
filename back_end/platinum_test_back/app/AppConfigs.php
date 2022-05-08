<?php

namespace App;

class AppConfigs
{
  // RESPOSTAS DO SERVIDOR
  const SUCESSO_AO_PESQUISAR = 'Pesquisa realizada com sucesso!';
  const SUCESSO_AO_CADASTRAR = 'Cadastro realizado com sucesso!';
  const SUCESSO_AO_DELETAR = 'Registro apagado com sucesso!';
  const SUCESSO_AO_ATUALIZAR = 'Registro atualizado com sucesso!';
  const FALHA_AO_CADASTRAR = 'Falha ao tentar cadastrar registro!';
  const FALHA_AO_DELETAR = 'Falha ao tentar deletar registro!';
  const FALHA_AO_PESQUISAR = 'Falha ao pesquisar  registro!';
  const FALHA_AO_ATUALIZAR = 'Falha ao tentar atualizar este registro!';
  const NADA_ENCONTRADO_NA_PESQUISA = 'Nenhum registro foi encontrado!';
  const ID_NAO_INFORMADO = "ID não encontrado na requisição!";
  const NENHUM_REGISTRO_COM_ESTE_ID = "Nenhum registro com este CODIGO foi encontrado!";
  const PLANO_INVALIDO = "Nenhum plano com este CODIGO foi encontrado!";
  const METODO_NAO_PERMITIDO = "Método não permitido!";

  // STATUS HTTP
  const HTTP_STATUS_OK = 200;
  const HTTP_STATUS_CREATED = 201;
  const HTTP_STATUS_NO_CONTENT = 204;
  const HTTP_STATUS_BAD_REQUEST = 400;
  const HTTP_STATUS_NOT_FOUND = 404;
  const HTTP_STATUS_METHOD_NOT_ALLOWED = 405;
}
