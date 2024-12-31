package com.example.imageapi.repository;

import com.example.imageapi.model.ImageDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ImageRepository extends MongoRepository<ImageDetails, String> {

    @Query("{ " +
            "'location': ?0, " +
            "'squareFeet': ?1, " +
            "'completed': ?2, " +
            "'ongoing': ?3 " +
            "}")
    List<ImageDetails> findByCriteria(String location, Integer squareFeet, Boolean completed, Boolean ongoing);
}
