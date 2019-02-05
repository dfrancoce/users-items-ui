package com.dfc.users.ui.service.assembler;

import com.dfc.users.ui.model.Role;
import com.dfc.users.ui.service.dto.RoleDto;
import org.springframework.stereotype.Component;

@Component
public class RoleAssembler implements Assembler<RoleDto, Role> {

    @Override
    public RoleDto toDto(Role role) {
        if (role == null) {
            return null;
        }

        return new RoleDto(role.getIdRole(), role.getRoleDescription());
    }
}
