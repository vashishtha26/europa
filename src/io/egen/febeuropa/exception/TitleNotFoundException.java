package io.egen.febeuropa.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND,reason="Title not found")
public class TitleNotFoundException extends Exception {
	private static final long serialVersionUID = 4989379306481712125L;

}