package argamunin.com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import argamunin.com.backend.entitys.Game;
import argamunin.com.backend.repositories.GameRepository;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private SequenceGeneratorService sequenceGenerator;
    
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    public Game getGameById(@NonNull Integer id) {
        return gameRepository.findById(id).orElse(null);
    }

    public Game createGame(@NonNull Game game) {
    	game.setId(sequenceGenerator.generateSequence(Game.SEQUENCE_NAME));
        return gameRepository.save(game);
    }

    public void deleteGameById(@NonNull Integer id) {
    	gameRepository.deleteById(id);
    }
}
