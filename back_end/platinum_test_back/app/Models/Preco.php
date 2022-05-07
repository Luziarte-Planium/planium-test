<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Preco extends Model
{
    private int $codigo;
    private int $minimo_vida;
    private float $preco;

    public function listar()
    {
        $arquivo = file_get_contents('../database/json/prices.json');
        $precos = json_decode($arquivo);
        return $precos;
    }

    public function listarPorId(int $codigo): array
    {
        $precos = $this->listar();

        $preco = array_filter($precos, function ($preco) use ($codigo) {
            return $preco->codigo === $codigo;
        });
        return $preco;
    }

    public function precoPorFaixaDeIdade(int $idade)
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
