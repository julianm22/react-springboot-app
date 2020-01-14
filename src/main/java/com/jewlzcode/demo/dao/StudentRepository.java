package com.jewlzcode.demo.dao;

import com.jewlzcode.demo.entities.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends CrudRepository<Student, Long> {

    @Override
    public List<Student> findAll();
}
