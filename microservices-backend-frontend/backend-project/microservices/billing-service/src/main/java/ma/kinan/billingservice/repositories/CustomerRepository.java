package ma.kinan.billingservice.repositories;

import ma.kinan.billingservice.models.Customer;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * @author Eren
 **/
@FeignClient(name = "CUSTOMER-SERVICE")
public interface CustomerRepository {
    @GetMapping("customers?projection=fullCustomer")
    PagedModel<Customer> getAllCustomers();
    @GetMapping("customers/{id}?projection=fullCustomer")
    Customer getCustomerById(@PathVariable Long id);
}
