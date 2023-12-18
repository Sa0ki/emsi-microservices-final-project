package ma.kinan.inventoryservice.repositories;

import ma.kinan.inventoryservice.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * @author Eren
 **/
@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {
}
