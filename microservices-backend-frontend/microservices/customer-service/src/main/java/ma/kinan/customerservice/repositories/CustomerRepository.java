package ma.kinan.customerservice.repositories;

import ma.kinan.customerservice.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * @author Eren
 **/
@RepositoryRestResource
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
