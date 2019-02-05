package com.dfc.users.ui.service;

import com.dfc.users.ui.model.User;
import com.dfc.users.ui.repository.UserRepository;
import com.dfc.users.ui.service.assembler.UserAssembler;
import com.dfc.users.ui.service.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * This class is responsible of the user operations
 */
@Service
public class UserService {
    private static final String ROLE_ADMIN = "admin";
    private final UserRepository userRepository;
    private final UserAssembler userAssembler;

    @Autowired
    public UserService(UserRepository userRepository, UserAssembler userAssembler) {
        this.userRepository = userRepository;
        this.userAssembler = userAssembler;
    }

    /**
     * Performs the login and depending on the role of the user, it returns all the users available in the database
     * or the user logged in
     * @param userName
     * @param password
     * @return
     */
    public List<UserDto> loginAndGetUsers(final String userName, final String password) {
        final User user = userRepository.findUserByUsernameAndPassword(userName, password);
        if (user == null) {
            return new ArrayList<>();
        }

        return getUsers(userAssembler.toDto(user));
    }

    private List<UserDto> getUsers(final UserDto userDto) {
        if (userDto.getRole().getRoleDescription().equalsIgnoreCase(ROLE_ADMIN)) {
            return userRepository.findAll().stream().map(userAssembler::toDto).collect(Collectors.toList());
        } else {
            return Collections.singletonList(userDto);
        }
    }
}
