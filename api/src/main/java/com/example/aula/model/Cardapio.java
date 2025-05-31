package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "Tab_Cardapio")
public class Cardapio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome do Prato  é obrigatório.")
    private String prato;

    @NotBlank(message = "Descrição é obrigatório.")
    private String descricao;

    @NotNull(message = "O Preço é obrigatório.")
    private Double preco;


    /*categoria*/
    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    /*disponibilidade*/
    @Enumerated(EnumType.STRING)
    private Disponibilidade disponibilidade;


    @NotBlank(message = "Imagem é obrigatória")
    private String  imagem;


    public Cardapio() {
    }

    public Cardapio(Long id, String prato, String descricao, Double preco, Categoria categoria, Disponibilidade disponibilidade, String imagem) {
        this.id = id;
        this.prato = prato;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.imagem = imagem;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome do Prato  é obrigatório.") String getPrato() {
        return prato;
    }

    public void setPrato(@NotBlank(message = "Nome do Prato  é obrigatório.") String prato) {
        this.prato = prato;
    }

    public @NotBlank(message = "Descrição é obrigatório.") String getDescricao() {
        return descricao;
    }

    public void setDescricao(@NotBlank(message = "Descrição é obrigatório.") String descricao) {
        this.descricao = descricao;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Disponibilidade getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(Disponibilidade disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public @NotBlank(message = "Imagem é obrigatória") String getImagem() {
        return imagem;
    }

    public void setImagem(@NotBlank(message = "Imagem é obrigatória") String imagem) {
        this.imagem = imagem;
    }
}
