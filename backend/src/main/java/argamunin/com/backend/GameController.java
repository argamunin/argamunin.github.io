package argamunin.com.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import argamunin.com.backend.entitys.Game;
import argamunin.com.backend.service.GameService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping("/games")
    private ResponseEntity<List<Game>> getGamesDetails() {
    	List<Game> games = gameService.getAllGames();
        return ResponseEntity.status(HttpStatus.OK).body(games);
    }
    
    @GetMapping("/gamebyid")
    private ResponseEntity<Game> getGameById(@NonNull Integer id) {
    	Game games = gameService.getGameById(id);
        return ResponseEntity.status(HttpStatus.OK).body(games);
    }
    
    @PostMapping(value = "/creategame", consumes = "application/json", produces = "application/json")
    private ResponseEntity<Game> createGame(@RequestBody Game game) {
    	Game games = gameService.createGame(game);
        return ResponseEntity.status(HttpStatus.OK).body(games);
    }
    
    @DeleteMapping("/deletegamebyid")
    private BodyBuilder deleteGameById(@NonNull Integer id) {
    	gameService.deleteGameById(id);
        return ResponseEntity.status(HttpStatus.OK);
    }
}