package com.example.demo.controller;

import com.example.demo.entity.Produto;
import com.example.demo.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/produtos")

public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @PostMapping
    public Produto criarProduto(@RequestBody Produto produtoCadastrado) {
        return produtoRepository.save(produtoCadastrado);
    }

    @GetMapping
    public java.util.List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }


}
