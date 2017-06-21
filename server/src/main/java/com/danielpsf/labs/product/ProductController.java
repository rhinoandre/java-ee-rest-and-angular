package com.danielpsf.labs.product;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("/product")
public class ProductController {

    @Context
    HttpHeaders httpHeaders;
    ProductService productService;

    public ProductController() {
        productService = new ProductService();
    }

    public ProductController(HttpHeaders httpHeaders, ProductService productService) {
        this.httpHeaders = httpHeaders;
        this.productService = productService;
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public Response listProducts() {
        return Response
                .status(Status.OK)
                .entity(productService.list())
                .build();
    }

    @GET
    @Path("/{productId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProduct(@PathParam(value = "productId") String productId) {
        return Response
                .status(Status.OK)
                .entity(productService.get(productId))
                .build();
    }
}