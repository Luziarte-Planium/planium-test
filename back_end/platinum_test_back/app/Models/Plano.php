<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class Plano extends Model
{
    //
    public function listar()
    {
        $arquivo = file_get_contents('../database/json/plans.json');
        $planos = json_decode($arquivo);
        return $planos;
    }

    /**
     * Retorna um plano baseado no $codigo
     *
     * @param integer $codigo código do preco
     * @return boolean
     */
    public function planoEhValido(int $codigo): bool
    {
        $planos = $this->listar();
        foreach ($planos as $key => $plano) {
            if ($plano->codigo === $codigo) {
                return true;
                break;
            }
        }

        return false;
    }

    public function listarPorId(int $codigo): array
    {
        $planos = $this->listar();

        $plano = array_filter($planos, function ($preco) use ($codigo) {
            return $preco->codigo === $codigo;
        });
        return [...$plano];
    }
}
