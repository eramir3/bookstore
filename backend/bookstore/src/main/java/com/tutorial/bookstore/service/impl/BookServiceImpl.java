package com.tutorial.bookstore.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tutorial.bookstore.domain.Book;
import com.tutorial.bookstore.dto.request.BookIdsRequestDto;
import com.tutorial.bookstore.repository.BookRepository;
import com.tutorial.bookstore.service.BookService;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepository;
	
	public List<Book> findAll() {
		
		List<Book> bookList = (List<Book>) bookRepository.findAll();
		
		List<Book> activeBookList = new ArrayList<>();
		
		for (Book book : bookList) {
			if(book.isActive()) {
				activeBookList.add(book);
			}
		}
		
		return activeBookList;
	}
	
	public Optional<Book> findById(Long id) {
		return bookRepository.findById(id);
	}
	
	public Book save(Book book) {
		return bookRepository.save(book);
	}

	public List<Book> blurrySearch(String keyword) {
		List<Book> bookList = bookRepository.findByTitleContaining(keyword);
		
		List<Book> activeBookList = new ArrayList<>();
		
		for (Book book : bookList) {
			if(book.isActive()) {
				activeBookList.add(book);
			}
		}
		
		return activeBookList;
	}
	
	public void removeOne(Long id) {
		bookRepository.deleteById(id);
	}
	
	public void removeAllSelected(List<Long> ids) {
		
		List<Book> books = (List<Book>) bookRepository.findAllById(ids);
		bookRepository.deleteAll(books);
	}
}
