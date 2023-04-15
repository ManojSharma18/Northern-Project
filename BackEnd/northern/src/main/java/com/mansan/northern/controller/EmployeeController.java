package com.mansan.northern.controller;

import com.mansan.northern.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.mansan.northern.model.*;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/add")
    public employee add(@RequestBody employee es)
    {
        employeeService.saveEmployee(es);
        return new employee();
    }

    @PostMapping("/adds")
    public Date_Range add(@RequestBody Date_Range date_range)
    {
        employeeService.saveStatus(date_range);
        return new Date_Range();
    }
}
