package com.mansan.northern.repository;

import com.mansan.northern.model.Date_Range;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo1 extends JpaRepository<Date_Range,Integer> {
}
