package argamunin.com.backend.configuration;

import org.bson.Document;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.lang.NonNull;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoException;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

import argamunin.com.backend.service.GameService;

@Configuration
public class AppConfig {
	
	@Bean
	MongoClient mongoClient() {
		String connectionString = "mongodb+srv://argamunin:rCD573GNOysZxpEY@argamunin.eieratd.mongodb.net/?retryWrites=true&w=majority";
	    ServerApi serverApi = ServerApi.builder()
	            .version(ServerApiVersion.V1)
	            .build();
	    MongoClientSettings settings = MongoClientSettings.builder()
	            .applyConnectionString(new ConnectionString(connectionString))
	            .serverApi(serverApi)
	            .build();
	    // Create a new client and connect to the server
	    MongoClient mongoClient = MongoClients.create(settings);
	    try {
	    	// Send a ping to confirm a successful connection
	        MongoDatabase database = mongoClient.getDatabase("admin");
	        database.runCommand(new Document("ping", 1));
	        System.out.println("Pinged your deployment. You successfully connected to MongoDB!");
	    } catch (MongoException e) {
	        e.printStackTrace();
	    }
	    
		return mongoClient;
	}

	@Bean
	MongoOperations mongoTemplate(@NonNull MongoClient mongoClient) {
		return new MongoTemplate(mongoClient, "geospatial");
	}

    @Bean
    GameService gameBean() {
        return new GameService();
    }

    @Bean
    ModelMapper modelMapperBean() {
        return new ModelMapper();
    }
}
