<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Beneficiario extends Model
{
    //
    public string $nome;
    public int $idade;
    public int $beneficiarios;
    public float $valorDoPlano;
    public array $plano;

    public function __construct($nome, $idade, $beneficiarios)
    {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->beneficiarios = $beneficiarios;
    }

    /**
     * Está função irá retornar todos os beneficiários já cadastrdos
     *
     * @return array
     */
    public static function listarTodos(): array
    {
        $beneficiarios = json_decode(file_get_contents("../database/json/proposta.json"));
        return $beneficiarios;
    }
    /**
     * Esta função irá salvar no arquivo proposta.json uma nova proposta
     *
     * @param float $valorDoPlano
     * @param array $plano
     * @return array
     */
    public function cadastrar(float $valorDoPlano, array $plano): array
    {
        $this->plano = $plano;
        $this->valorDoPlano = $valorDoPlano;
        $propostas = json_decode(file_get_contents("../database/json/proposta.json"));
        $novaProposta = array(
            "codigo" => uniqid(),
            "nome" => $this->nome,
            "idade" => $this->idade,
            "beneficiarios" => $this->beneficiarios,
            "valorDoPlano" => $this->valorDoPlano,
            "plano" => $this->plano
        );

        array_push($propostas, $novaProposta);
        file_put_contents("../database/json/proposta.json", json_encode($propostas));
        return $novaProposta;
    }
}
