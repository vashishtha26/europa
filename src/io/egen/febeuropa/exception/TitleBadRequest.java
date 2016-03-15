package io.egen.febeuropa.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST, reason="Invalid data submitted to title request")
public class TitleBadRequest extends Exception {

	private static final long serialVersionUID = 1L;

}