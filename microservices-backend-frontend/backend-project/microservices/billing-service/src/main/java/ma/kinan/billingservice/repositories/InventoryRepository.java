package ma.kinan.billingservice.repositories;

import ma.kinan.billingservice.models.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * @author Eren
 **/
@FeignClient(name = "INVENTORY-SERVICE")
public interface InventoryRepository {
    @GetMapping("products?projection=fullProduct")
    PagedModel<Product> getAllProducts();
    @GetMapping("products/{id}?projection=fullProduct")
    Product getProductById(@PathVariable Long id);
}
