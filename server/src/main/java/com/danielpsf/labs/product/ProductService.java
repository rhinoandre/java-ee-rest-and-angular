package com.danielpsf.labs.product;

import java.util.Arrays;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class ProductService {

    private static final Logger LOG = LogManager.getLogger(ProductService.class);

    public List<Product> list() {
        LOG.debug("Listing products");
        return Arrays.asList(
                new Product(1, "Product 1", "Lorem Ipsum", 12.5),
                new Product(2, "Product 2", "Lorem Ipsum", 10.5));
    }

    public Product get(String productId) {
        LOG.debug("Getting product with id: " + productId);
        return new Product(1, "Product 1", "Lorem Ipsum", 12.5);
    }
}
