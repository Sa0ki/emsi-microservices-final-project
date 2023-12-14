package ma.kinan.billingservice.Controllers;

import lombok.AllArgsConstructor;
import ma.kinan.billingservice.models.Bill;
import ma.kinan.billingservice.models.Customer;
import ma.kinan.billingservice.models.Product;
import ma.kinan.billingservice.models.ProductItem;
import ma.kinan.billingservice.repositories.BillRepository;
import ma.kinan.billingservice.repositories.CustomerRepository;
import ma.kinan.billingservice.repositories.InventoryRepository;
import ma.kinan.billingservice.repositories.ProductItemRepository;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

/**
 * @author Eren
 **/
@RestController
@AllArgsConstructor
@EnableFeignClients
public class BillController {
    private BillRepository billRepository;
    private ProductItemRepository productItemRepository;
    private InventoryRepository inventoryRepository;
    private CustomerRepository customerRepository;

    @GetMapping("bills")
    public List<Bill> getAllBills(){
        List<Bill> bills = billRepository.findAll();
        bills.forEach(b -> {
            b.getProductItems().forEach(pi -> {
                Product product = inventoryRepository.getProductById(pi.getProductId());
                pi.setProduct(product);
            });
            Customer customer = customerRepository.getCustomerById(b.getCustomerId());
            b.setCustomer(customer);
        });
        return bills;
    }
    @GetMapping("bills/{id}")
    public Bill getBillById(@PathVariable Long id){
        Bill bill = billRepository.findById(id).get();
        Double total = 0D;
        for(ProductItem pi: bill.getProductItems()){
            Product product = inventoryRepository.getProductById(pi.getProductId());
            pi.setProduct(product);
            total += pi.getQuantityItem() * product.getPrice();
        };
        Customer customer = customerRepository.getCustomerById(bill.getCustomerId());
        bill.setCustomer(customer);
        bill.setTotal(total);
        return bill;
    }
    @GetMapping("bills/customer/{id}")
    public List<Bill> getAllBills(@PathVariable Long id){
        List<Bill> bills = billRepository.findByCustomerId(id);
        for(Bill b: bills){
            double total = 0D;
            for(ProductItem pi: b.getProductItems()){
                Product product = inventoryRepository.getProductById(pi.getProductId());
                pi.setProduct(product);
                total += pi.getProduct().getPrice() * pi.getQuantityItem();
            };
            Customer customer = customerRepository.getCustomerById(b.getCustomerId());
            b.setCustomer(customer);
            b.setTotal(total);
        };

        return bills;
    }
}
