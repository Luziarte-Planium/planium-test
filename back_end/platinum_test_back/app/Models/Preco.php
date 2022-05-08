<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Preco extends Model
{
    private int $codigo;
    private int $minimo_vida;
    private float $preco;

    /**
     * Esta função irá retornar todos os precos no arquivo prices.json
     *
     * @return array
     */
    public function listar(): array
    {
        $arquivo = file_get_contents('../database/json/prices.json');
        $precos = json_decode($arquivo);
        return $precos;
    }

    /**
     * Esta função irá retornar um preço pelo basedo no $codigo
     *
     * @param integer $codigo do preço
     * @return array
     */
    public function listarPorId(int $codigo): array
    {
        $precos = $this->listar();

        $preco = array_filter($precos, function ($preco) use ($codigo) {
            return $preco->codigo === $codigo;
        });
        return $preco;
    }

    /**
     * Esta função irá calcular o preco baseado na faixa de idade
     *
     * @param integer $idade
     * @return float
     */
    public function precoPorFaixaDeIdade(int $idade): float
    {
        $precos = $this->listar();
        if ($idade >= 17) {
            $this->preco = $precos[0]->faixa1;
        } elseif ($idade <= 18 && $idade >= 40) {
            $this->preco = $precos[0]->faixa2;
        } else {
            $this->preco = $precos[0]->faixa3;
        }
        return $this->preco;
    }
}
