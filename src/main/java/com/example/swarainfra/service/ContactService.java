package com.example.swarainfra.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.swarainfra.model.Contact;
import com.example.swarainfra.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

	public List<Contact> getPaginatedContacts(int page, int size) {
		// TODO Auto-generated method stub
		return null;
	}
}
