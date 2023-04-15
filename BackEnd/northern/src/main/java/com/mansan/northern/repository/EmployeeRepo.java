package com.mansan.northern.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mansan.northern.model.employee;

@Repository
public interface EmployeeRepo extends JpaRepository<employee,Integer> {

}
