package com.dfc.users.ui.service.assembler;

import com.dfc.users.ui.model.User;
import com.dfc.users.ui.service.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserAssembler implements Assembler<UserDto, User> {
    private final RoleAssembler roleAssembler;

    @Autowired
    public UserAssembler(RoleAssembler roleAssembler) {
        this.roleAssembler = roleAssembler;
    }

    public UserDto toDto(final User user) {
        if (user == null) {
            return null;
        }

        final UserDto userDto = new UserDto();
        userDto.setIdUser(user.getIdUser());
        userDto.setPassword(user.getPassword());
        userDto.setUsername(user.getUsername());
        userDto.setRole(roleAssembler.toDto(user.getRole()));

        return userDto;
    }
}
