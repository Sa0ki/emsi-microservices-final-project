package ma.kinan.billingservice.repositories;

import ma.kinan.billingservice.models.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * @author Eren
 **/
@RepositoryRestResource(path = "billsR")
public interface BillRepository extends JpaRepository<Bill, Long> {
    List<Bill> findByCustomerId(Long id);
}
