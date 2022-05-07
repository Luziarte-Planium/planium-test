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
}
