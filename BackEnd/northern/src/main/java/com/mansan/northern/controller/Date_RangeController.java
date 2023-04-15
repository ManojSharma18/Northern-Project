package com.mansan.northern.controller;

import com.mansan.northern.model.Date_Range;
import com.mansan.northern.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/date_range")
@CrossOrigin
public class Date_RangeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/adds")
    public Date_Range add(@RequestBody Date_Range date_range)
    {
        employeeService.saveStatus(date_range);
        return new Date_Range();
    }
}
