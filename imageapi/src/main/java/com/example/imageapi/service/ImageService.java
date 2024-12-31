package com.example.imageapi.service;

import com.example.imageapi.model.ImageDetails;
import com.example.imageapi.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public ImageDetails saveImageDetails(ImageDetails imageDetails) {
        return imageRepository.save(imageDetails);
    }

    public List<ImageDetails> getAllImages() {
        return imageRepository.findAll();
    }

    public void deleteImageById(String id) {
        imageRepository.deleteById(id);
    }

    public List<ImageDetails> findImagesByCriteria(String location, Integer squareFeet, Boolean completed, Boolean ongoing) {
        return imageRepository.findByCriteria(location, squareFeet, completed, ongoing);
    }
}

