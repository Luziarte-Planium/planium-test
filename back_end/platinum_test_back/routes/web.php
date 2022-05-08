<?php

/** @var \Laravel\Lumen\Routing\Router $router */


$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'beneficiario'], function () use ($router) {
    $router->get('/', 'BeneficiariosController@listarTodos');
    $router->post('/', 'BeneficiariosController@novoBeneficario');
    $router->delete('/{id}', 'BeneficiariosController@novoBeneficario');
});
