package com.example.imageapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.imageapi.model.ImageDetails;
import com.example.imageapi.service.ImageService;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/swarainfra/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    // Handles form-data input for submitting a single image
    @PostMapping("/submit")
    public ResponseEntity<?> submitImage(
            @RequestParam("location") String location,
            @RequestParam("imageUrl") MultipartFile file,
            @RequestParam("squareFeet") int squareFeet,
            @RequestParam("completed") boolean completed,
            @RequestParam("ongoing") boolean ongoing) throws IOException {

        // Directory to save the uploaded file
        String uploadDir = System.getProperty("user.dir") + "/uploads/";
        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs(); // Create directory if it doesn't exist
        }

        // Generate a unique filename
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        String filePath = uploadDir + fileName;

        // Save the file to the local system
        file.transferTo(new File(filePath));

        // Generate a URL for accessing the file
        String fileUrl = "/uploads/" + fileName;

        // Create ImageDetails object
        ImageDetails imageDetails = new ImageDetails();
        imageDetails.setLocation(location);
        imageDetails.setImageUrl(fileUrl); // Save the file URL in the database
        imageDetails.setSquareFeet(squareFeet);
        imageDetails.setCompleted(completed);
        imageDetails.setOngoing(ongoing);

        // Save the image details to the database
        ImageDetails savedImageDetails = imageService.saveImageDetails(imageDetails);

        // Return the saved image details
        return ResponseEntity.ok(savedImageDetails);
    }

    // Fetches all image details from the database (only fetch, no saving)
    @PostMapping("/all")
    public ResponseEntity<?> fetchAllImages() {
        // Retrieve all images from the database
        List<ImageDetails> images = imageService.getAllImages();

        // Return the list of images
        return ResponseEntity.ok(images);
    }
}
