package ma.kinan.customerservice;

import ma.kinan.customerservice.models.Customer;
import ma.kinan.customerservice.repositories.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class CustomerServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner init(CustomerRepository customerRepository){
		return args -> {
			customerRepository.saveAll(List.of(
					Customer.builder().firstName("Jager").lastName("Kawtar").age(26).email("kawtar1997@gmail.com").build(),
					Customer.builder().firstName("Kinan").lastName("Saad").age(23).email("e.saad.kinan@gmail.com").build(),
					Customer.builder().firstName("Lahlou").lastName("Yassine").age(19).email("daryass@gmail.com").build(),
					Customer.builder().firstName("Valek").lastName("Sarah").age(16).email("valeksar@gmail.com").build()
			));
		};
	}
}
