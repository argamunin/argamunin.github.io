package argamunin.com.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import argamunin.com.backend.entitys.Game;

@Repository
public interface GameRepository extends MongoRepository<Game, Integer> {

}
