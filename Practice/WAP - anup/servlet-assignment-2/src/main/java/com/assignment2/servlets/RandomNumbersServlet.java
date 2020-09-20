package com.assignment2.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/random")
public class RandomNumbersServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Double> numbers = new ArrayList<>();

        int amount = Integer.parseInt(req.getParameter("amount"));
        for(int i = 0; i<amount; i++){
            numbers.add(Math.random());
        }

        req.setAttribute("numbers", numbers.toString());
        req.getRequestDispatcher("random.jsp").forward(req, resp);
    }
}
