package com.example.aula.service;

import com.example.aula.exception.EmailJaCadastradoException;
import com.example.aula.model.Cardapio;
import com.example.aula.repository.CardapioRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
public class CardapioService {
    private CardapioRepository cardapioRepository;

    public CardapioService(CardapioRepository cardapioRepository) {
        this.cardapioRepository = cardapioRepository;
    }

    public List<Cardapio> listarTodos() {
        return cardapioRepository.findAll();
    }

    public Cardapio salvar(@Valid Cardapio cardapio) {
        if (cardapioRepository.findByPrato(cardapio.getPrato()).isPresent()) {
            throw new EmailJaCadastradoException("Prato já cadastrado.");
        }

        return cardapioRepository.save(cardapio);
    }
    public Cardapio atualizar(@Valid Cardapio cardapio) {
        Cardapio cardapioAtualizar = cardapioRepository.findById(cardapio.getId())
                .orElseThrow(() -> new IllegalArgumentException("Prato não encontrado."));

        cardapioAtualizar.setPrato(cardapio.getPrato());
        cardapioAtualizar.setDescricao(cardapio.getDescricao());
        cardapioAtualizar.setPreco(cardapio.getPreco());
        cardapioAtualizar.setCategoria(cardapio.getCategoria());
        cardapioAtualizar.setDisponibilidade(cardapio.getDisponibilidade());
        cardapioAtualizar.setImagem(cardapio.getImagem());

        return cardapioRepository.save(cardapioAtualizar);
    }


    public void excluir(Long id) {
        Cardapio cardapioExcluir = cardapioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Prato não encontrado"));

        cardapioRepository.deleteById(cardapioExcluir.getId());
    }

}
