package com.laioffer.twitch.hello;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {


    @GetMapping("/hello")
    public Person sayHello() {
        return new Person("name", "company",
                new Address("street", "city", null, "country"),
                new Book("title", "author"));
    }
}
