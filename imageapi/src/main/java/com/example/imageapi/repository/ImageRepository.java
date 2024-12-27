package com.example.imageapi.repository;

import com.example.imageapi.model.ImageDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends MongoRepository<ImageDetails, String> {
}
