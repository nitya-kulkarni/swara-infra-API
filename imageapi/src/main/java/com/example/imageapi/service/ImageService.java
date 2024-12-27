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

    public List<ImageDetails> getAllImages() {
        return imageRepository.findAll();
    }

    public ImageDetails saveImageDetails(ImageDetails imageDetails) {
        return imageRepository.save(imageDetails);
    }

    public void deleteImageById(String id) {
        imageRepository.deleteById(id);
    }
}
