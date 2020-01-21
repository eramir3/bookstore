package com.tutorial.bookstore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tutorial.bookstore.domain.Book;
import com.tutorial.bookstore.dto.request.BookIdsRequestDto;

@Service
public interface BookService {

	List<Book> findAll();
	
	Optional<Book> findById(Long id);
	
	Book save(Book book);
	
	List<Book> blurrySearch(String title);
	
	void removeOne(Long id);
	
	void removeAllSelected(List<Long> ids);
}
