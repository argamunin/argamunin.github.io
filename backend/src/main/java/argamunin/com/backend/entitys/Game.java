package argamunin.com.backend.entitys;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "games")
public class Game {
    @Transient
    public static final String SEQUENCE_NAME = "games_sequence";
    
	@Id
    private Long id;
    private String name;
    private List<String> images;
    private String description;
    
	public Game(String name, List<String> images, String description) {
		super();
		this.name = name;
		this.images = images;
		this.description = description;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<String> getImages() {
		return images;
	}
	public void setImages(List<String> images) {
		this.images = images;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
