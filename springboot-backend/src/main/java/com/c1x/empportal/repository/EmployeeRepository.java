package com.c1x.empportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.c1x.empportal.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
