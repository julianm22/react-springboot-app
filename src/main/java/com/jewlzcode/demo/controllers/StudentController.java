package com.jewlzcode.demo.controllers;

import com.jewlzcode.demo.dao.StudentRepository;
import com.jewlzcode.demo.entities.Student;
import com.jewlzcode.demo.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("students")
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping
    List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    public void addNewStudent(@RequestBody Student student) {
        studentService.addNewStudent(student);
    }

}
