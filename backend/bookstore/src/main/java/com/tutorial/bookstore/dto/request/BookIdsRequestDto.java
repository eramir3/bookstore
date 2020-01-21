package com.tutorial.bookstore.dto.request;

import java.util.List;

import javax.validation.constraints.NotBlank;

public class BookIdsRequestDto {

	@NotBlank(message = "List of books cannot be blank")
	private List<Long> ids;

	public List<Long> getIds() {
		return ids;
	}

	public void setIds(List<Long> ids) {
		this.ids = ids;
	}

	@Override
	public String toString() {
		return "BooksDeleteRequestDto [ids=" + ids + "]";
	}
	
}
