package argamunin.com.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(origins = "http://localhost:3000")
@EnableAutoConfiguration(exclude={MongoAutoConfiguration.class})
@SpringBootApplication
public class BackendApplication {
    
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);

	}
}
