package ma.kinan.billingservice;

import ma.kinan.billingservice.models.Bill;
import ma.kinan.billingservice.models.Customer;
import ma.kinan.billingservice.models.Product;
import ma.kinan.billingservice.models.ProductItem;
import ma.kinan.billingservice.repositories.BillRepository;
import ma.kinan.billingservice.repositories.CustomerRepository;
import ma.kinan.billingservice.repositories.InventoryRepository;
import ma.kinan.billingservice.repositories.ProductItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@SpringBootApplication
@EnableFeignClients
public class BillingServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BillingServiceApplication.class, args);
    }
    @Bean
    public CommandLineRunner init(BillRepository billRepository, ProductItemRepository productItemRepository,
                                  InventoryRepository inventoryRepository, CustomerRepository customerRepository){
        return args -> {
            List<Product> products = inventoryRepository.getAllProducts().getContent().stream().toList();
            List<Customer> customers = customerRepository.getAllCustomers().getContent().stream().toList();

            customers.forEach(customer -> {
                int maxBills = 0;
                if (Math.random() < 0.4)
                    maxBills = (int)(Math.random() * 5) + 1;
                else
                    maxBills = (int)(Math.random() * 3 + 1);
                for(int j = 0; j < maxBills; j ++){
                Bill bill = new Bill();
                bill.setCustomer(customer);
                bill.setCustomerId(customer.getId());
                bill.setBillingDate(new Date());
                Bill billSaved = billRepository.save(bill);
                int maxProducts = 0;
                if(Math.random() < 0.5)
                    maxProducts = products.size();
                else
                    maxProducts = products.size() / 2;
                List<ProductItem> productItems = new ArrayList<>();
                for(int i = 0; i < maxProducts; i ++){
                    ProductItem productItem = ProductItem.builder()
                            .productId(products.get(i).getId())
                            .product(products.get(i))
                            .quantityItem((int) (Math.random() * products.get(i).getQuantity() + 1))
                            .bill(billSaved)
                            .build();
                    productItems.add(productItem);
                }
                List<ProductItem> productItemsSaved = productItemRepository.saveAll(productItems);
                billSaved.setProductItems(productItemsSaved);
                billRepository.save(billSaved);
            }
            });
        };
    }
}
