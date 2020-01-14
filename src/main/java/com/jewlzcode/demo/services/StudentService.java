package com.jewlzcode.demo.services;

import com.jewlzcode.demo.dao.StudentRepository;
import com.jewlzcode.demo.entities.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
