package com.dfc.users.ui.service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RoleDto {
    @JsonProperty
    private Long idRole;
    @JsonProperty
    private String roleDescription;

    public RoleDto(Long idRole, String roleDescription) {
        this.idRole = idRole;
        this.roleDescription = roleDescription;
    }

    public Long getIdRole() {
        return idRole;
    }

    public void setIdRole(Long idRole) {
        this.idRole = idRole;
    }

    public String getRoleDescription() {
        return roleDescription;
    }

    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }
}
