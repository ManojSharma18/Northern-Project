package com.mansan.northern.service;

import com.mansan.northern.model.Date_Range;
import com.mansan.northern.model.employee;
import com.mansan.northern.repository.EmployeeRepo;
import com.mansan.northern.repository.EmployeeRepo1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImplementation implements  EmployeeService
{

    @Autowired
    private EmployeeRepo employeeRepo;
    private final  EmployeeRepo1 employeeRepo1;

    public EmployeeServiceImplementation(EmployeeRepo1 employeeRepo1) {
        this.employeeRepo1 = employeeRepo1;
    }

    @Override
    public employee saveEmployee(employee empstatus) {

        return employeeRepo.save(empstatus);
    }

    @Override
    public Date_Range saveStatus(Date_Range date_range) {
        return employeeRepo1.save(date_range);
    }
}
