package com.dfc.users.ui.service.assembler;

/**
 * Interface that defines the operation to transform a model into a DTO
 * @param <D>
 * @param <M>
 */
public interface Assembler<D, M> {
    D toDto(M m);
}
