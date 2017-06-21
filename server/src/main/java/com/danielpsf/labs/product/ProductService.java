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
                new Product("Product 1"),
                new Product("Product 2"));
    }

    public Product get(String productId) {
        LOG.debug("Getting product with id: " + productId);
        return new Product("product 1");
    }
}
