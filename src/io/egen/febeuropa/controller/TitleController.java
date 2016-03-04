package io.egen.febeuropa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.egen.febeuropa.entity.Title;
import io.egen.febeuropa.exception.TitleBadRequest;
import io.egen.febeuropa.exception.TitleNotFoundException;
import io.egen.febeuropa.service.TitleService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/titles")
@Api(tags="titles")
public class TitleController {
	
	@Autowired
	private TitleService service;
	
	@RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Find All titles",
			notes="Returns a list of the users in the system.")
	public List<Title> findAll () {
		return service.findAllTitles();
	}
	

	@RequestMapping(value="{titleId}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Find title By Id",
	notes="Returns a title by it's id if it exists.")
	public Title findOne(@PathVariable("titleId") String titleId) throws TitleNotFoundException {
		return service.findTitleById(titleId);
	}
	
	
	@RequestMapping(method=RequestMethod.POST, 
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Create title",
	notes="Create and return title")
	@ApiResponses(value={
		@ApiResponse(code=200, message="Success"),
		@ApiResponse(code=400, message="Bad Request"),
		@ApiResponse(code=500, message="Internal Server Error")
	})
	public Title create (@RequestBody Title title) throws TitleBadRequest{
		return service.addTitle(title);
	}
	
	@RequestMapping(value="{titleId}", 
			method=RequestMethod.PUT,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Update title",
	notes="Update an existing title")
	public Title update (@PathVariable("titleId") String titleId, @RequestBody Title title) throws TitleNotFoundException {
		return service.updateTitle(titleId, title);
	}
	
	@RequestMapping(value="{titleId}", method=RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Delete title",
	notes="Delete an existing title")
	public void delete (@PathVariable("titleId") String titleId) throws TitleNotFoundException {
		service.deleteTitle(titleId);
	}

	@RequestMapping(value="{type}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Find that is it a movie or series?",
	notes="Returns either all movies or series!")
	public List<Title> findByType (@RequestParam(required=true,value="Type") String type) {
		return service.findByType(type);
	}
	@RequestMapping(value="{year}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Find movies and series in a particular year",
	notes="Returns all movies and series in same year!")
	public List<Title> findByYear (@RequestParam(required=true,value="Year") String year) {
		return service.findByYear(year);
	}
	@RequestMapping(value="{genre}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Find movies and series in a particular genre",
	notes="Returns all movies and series in same genre!")
	public List<Title> findByGenre (@RequestParam(required=true,value="Genre") String genre) {
		return service.findByGenre(genre);
	}

}
