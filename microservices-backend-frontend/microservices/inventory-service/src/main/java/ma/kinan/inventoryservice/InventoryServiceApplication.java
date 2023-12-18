package ma.kinan.inventoryservice;

import ma.kinan.inventoryservice.models.Product;
import ma.kinan.inventoryservice.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }
    @Bean
    public CommandLineRunner init(ProductRepository productRepository){
        return args -> {
            productRepository.saveAll(List.of(
                    Product.builder().name("Playstation 5").price(8499.99).quantity(150).build(),
                    Product.builder().name("Xbox 360").price(2000.00).quantity(35).build(),
                    Product.builder().name("Iphone 12S").price(1249.99).quantity(20).build()
                    ));
        };
    }
}
