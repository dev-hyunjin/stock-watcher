package com.app.stockwatcher.dto;

import java.util.List;

public record ApiListResponse<T>(List<T> items) {
    public static <T> ApiListResponse<T> of(List<T> items) {
        return new ApiListResponse<>(items);
    }
}
