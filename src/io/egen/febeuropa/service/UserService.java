package io.egen.febeuropa.service;

import java.util.List;

import io.egen.febeuropa.entity.User;
import io.egen.febeuropa.exception.UserAlreadyExistsException;
import io.egen.febeuropa.exception.UserNotFoundException;


public interface UserService {
	List<User> findAllUsers();

	User findUserById(String id) throws UserNotFoundException;

	User findUserByEmail(String email) throws UserNotFoundException;

	User createUser(User user) throws UserAlreadyExistsException;

	User updateUser(String id, User user) throws UserNotFoundException;

	void deleteUser(String id) throws UserNotFoundException;

}
