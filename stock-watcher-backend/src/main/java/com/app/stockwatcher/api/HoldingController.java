package com.app.stockwatcher.api;

import com.app.stockwatcher.dto.ApiListResponse;
import com.app.stockwatcher.dto.HoldingDto;
import com.app.stockwatcher.service.HoldingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/holdings")
public class HoldingController {

    private final HoldingService holdingService;

    public HoldingController(HoldingService holdingService) {
        this.holdingService = holdingService;
    }

    @GetMapping
    public ApiListResponse<HoldingDto> getHoldings(
            @RequestHeader(value = "X-USER-ID", required = false) Long userIdHeader
    ) {
        long userId = (userIdHeader == null ? 1L : userIdHeader);
        List<HoldingDto> items = holdingService.getOpenHoldings(userId);
        return ApiListResponse.of(items);
    }
}