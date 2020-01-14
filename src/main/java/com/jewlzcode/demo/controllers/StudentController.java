package com.jewlzcode.demo.controllers;

import com.jewlzcode.demo.dao.StudentRepository;
import com.jewlzcode.demo.entities.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("students")
public class StudentController {

    @Autowired
    StudentRepository studRepo;

    @GetMapping
    List<Student> getAllStudents() {
        return studRepo.findAll();
    }

}
